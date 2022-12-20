import type {
  UnknownAsyncThunkFulfilledAction,
  UnknownAsyncThunkPendingAction,
  UnknownAsyncThunkRejectedAction,
  // eslint-disable-next-line import/no-unresolved
} from '@reduxjs/toolkit/dist/matchers'
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import stringify from 'fast-json-stable-stringify'
import farmsConfig from 'config/constants/farms'
import multicall from 'utils/multicall'
import masterchefABI from 'config/abi/masterchef.json'
import { getMasterChefAddress } from 'utils/addressHelpers'
import { getBalanceAmount } from 'utils/formatBalance'
import { ethersToBigNumber } from 'utils/bigNumber'
import type { AppState } from 'state'
import splitProxyPools from 'views/Pools/components/YieldBooster/helpers/splitProxyPools'

import fetchPools from './fetchPools'
import getPoolsPrices from './getPoolsPrices'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
} from './fetchFarmUser'
import { SerializedPoolsState, SerializedFarm } from '../types'
import { fetchMasterChefFarmPoolLength } from './fetchMasterChefData'
import { resetUserState } from '../global/actions'

const noAccountFarmConfig = farmsConfig.map((farm) => ({
  ...farm,
  userData: {
    allowance: '0',
    tokenBalance: '0',
    stakedBalance: '0',
    earnings: '0',
  },
}))

const initialState: SerializedPoolsState = {
  data: noAccountFarmConfig,
  loadArchivedPoolsData: false,
  userDataLoaded: false,
  loadingKeys: {},
}

// Async thunks
export const fetchPoolsPublicDataAsync = createAsyncThunk<
  [SerializedFarm[], number, number],
  number[],
  {
    state: AppState
  }
>(
  'farms/fetchPoolsPublicDataAsync',
  async (pids) => {
    const masterChefAddress = getMasterChefAddress()
    const calls = [
      {
        address: masterChefAddress,
        name: 'poolLength',
      },
      {
        address: masterChefAddress,
        name: 'pikachuPerBlock',
        // params: [true],
      },
    ]
    const [[poolLength], [pikachuPerBlockRaw]] = await multicall(masterchefABI, calls)
    const regularCakePerBlock = getBalanceAmount(ethersToBigNumber(pikachuPerBlockRaw))
    const farmsCanFetch = farmsConfig.filter(
      (farmConfig) => pids.includes(farmConfig.pid) && poolLength.gt(farmConfig.pid),
    )

    const farms = await fetchPools(farmsCanFetch)
    const farmsWithPrices = getPoolsPrices(farms)

    return [farmsWithPrices, poolLength.toNumber(), regularCakePerBlock.toNumber()]
  },
  {
    condition: (arg, { getState }) => {
      const { farms } = getState()
      if (farms.loadingKeys[stringify({ type: fetchPoolsPublicDataAsync.typePrefix, arg })]) {
        console.debug('farms action is fetching, skipping here')
        return false
      }
      return true
    },
  },
)

interface FarmUserDataResponse {
  pid: number
  allowance: string
  tokenBalance: string
  stakedBalance: string
  earnings: string
  proxy?: {
    allowance: string
    tokenBalance: string
    stakedBalance: string
    earnings: string
  }
}

async function getBoostedPoolsStakeValue(farms, account, proxyAddress) {
  const [
    userFarmAllowances,
    userFarmTokenBalances,
    userStakedBalances,
    userFarmEarnings,
    proxyUserFarmAllowances,
    proxyUserStakedBalances,
    proxyUserFarmEarnings,
  ] = await Promise.all([
    fetchFarmUserAllowances(account, farms),
    fetchFarmUserTokenBalances(account, farms),
    fetchFarmUserStakedBalances(account, farms),
    fetchFarmUserEarnings(account, farms),
    // Proxy call
    fetchFarmUserAllowances(account, farms, proxyAddress),
    fetchFarmUserStakedBalances(proxyAddress, farms),
    fetchFarmUserEarnings(proxyAddress, farms),
  ])

  const farmAllowances = userFarmAllowances.map((farmAllowance, index) => {
    return {
      pid: farms[index].pid,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userFarmEarnings[index],
      proxy: {
        allowance: proxyUserFarmAllowances[index],
        // NOTE: Duplicate tokenBalance to maintain data structure consistence
        tokenBalance: userFarmTokenBalances[index],
        stakedBalance: proxyUserStakedBalances[index],
        earnings: proxyUserFarmEarnings[index],
      },
    }
  })

  return farmAllowances
}

async function getNormalPoolsStakeValue(farms, account) {
  const [userFarmAllowances, userFarmTokenBalances, userStakedBalances, userFarmEarnings] = await Promise.all([
    fetchFarmUserAllowances(account, farms),
    fetchFarmUserTokenBalances(account, farms),
    fetchFarmUserStakedBalances(account, farms),
    fetchFarmUserEarnings(account, farms),
  ])

  const normalFarmAllowances = userFarmAllowances.map((_, index) => {
    return {
      pid: farms[index].pid,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userFarmEarnings[index],
    }
  })

  return normalFarmAllowances
}

export const fetchFarmUserDataAsync = createAsyncThunk<
  FarmUserDataResponse[],
  { account: string; pids: number[]; proxyAddress?: string },
  {
    state: AppState
  }
>(
  'farms/fetchFarmUserDataAsync',
  async ({ account, pids, proxyAddress }, config) => {
    const poolLength = config.getState().farms.poolLength ?? (await fetchMasterChefFarmPoolLength()).toNumber()
    const farmsCanFetch = farmsConfig.filter(
      (farmConfig) => pids.includes(farmConfig.pid) && poolLength > farmConfig.pid,
    )
    if (proxyAddress && farmsCanFetch?.length) {
      const { normalPools, farmsWithProxy } = splitProxyPools(farmsCanFetch)

      const [proxyAllowances, normalAllowances] = await Promise.all([
        getBoostedPoolsStakeValue(farmsWithProxy, account, proxyAddress),
        getNormalPoolsStakeValue(normalPools, account),
      ])

      return [...proxyAllowances, ...normalAllowances]
    }

    return getNormalPoolsStakeValue(farmsCanFetch, account)
  },
  {
    condition: (arg, { getState }) => {
      const { farms } = getState()
      if (farms.loadingKeys[stringify({ type: fetchFarmUserDataAsync.typePrefix, arg })]) {
        console.debug('farms user action is fetching, skipping here')
        return false
      }
      return true
    },
  },
)

type UnknownAsyncThunkFulfilledOrPendingAction =
  | UnknownAsyncThunkFulfilledAction
  | UnknownAsyncThunkPendingAction
  | UnknownAsyncThunkRejectedAction

const serializeLoadingKey = (
  action: UnknownAsyncThunkFulfilledOrPendingAction,
  suffix: UnknownAsyncThunkFulfilledOrPendingAction['meta']['requestStatus'],
) => {
  const type = action.type.split(`/${suffix}`)[0]
  return stringify({
    arg: action.meta.arg,
    type,
  })
}

export const farmsSlice = createSlice({
  name: 'Pools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetUserState, (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.data = state.data.map((farm) => {
        return {
          ...farm,
          userData: {
            allowance: '0',
            tokenBalance: '0',
            stakedBalance: '0',
            earnings: '0',
          },
        }
      })
      state.userDataLoaded = false
    })
    // Update farms with live data
    builder.addCase(fetchPoolsPublicDataAsync.fulfilled, (state, action) => {
      const [farmPayload, poolLength, regularCakePerBlock] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = farmPayload.find((farmData) => farmData.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
      state.poolLength = poolLength
      state.regularCakePerBlock = regularCakePerBlock
    })

    // Update farms with user data
    builder.addCase(fetchFarmUserDataAsync.fulfilled, (state, action) => {
      action.payload.forEach((userDataEl) => {
        const { pid } = userDataEl

        const index = state.data.findIndex((farm) => farm.pid === pid)
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
      state.userDataLoaded = true
    })

    builder.addMatcher(isAnyOf(fetchFarmUserDataAsync.pending, fetchPoolsPublicDataAsync.pending), (state, action) => {
      state.loadingKeys[serializeLoadingKey(action, 'pending')] = true
    })
    builder.addMatcher(
      isAnyOf(fetchFarmUserDataAsync.fulfilled, fetchPoolsPublicDataAsync.fulfilled),
      (state, action) => {
        state.loadingKeys[serializeLoadingKey(action, 'fulfilled')] = false
      },
    )
    builder.addMatcher(
      isAnyOf(fetchPoolsPublicDataAsync.rejected, fetchFarmUserDataAsync.rejected),
      (state, action) => {
        state.loadingKeys[serializeLoadingKey(action, 'rejected')] = false
      },
    )
  },
})

export default farmsSlice.reducer
