import BigNumber from 'bignumber.js'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LaunchState, AppThunk } from 'state/types'
import { ethers } from 'ethers'
import { fetchBalance, fetchStartTime, fetchEndTime, fetchSoftCapReached, fetchFinalized, fetchContribution } from './fetchLaunch'

const initialState: LaunchState = {
  start: null,
  end: null,
  balance: null,
  softCapReached: true,
  finalized: false,
  contribution: null,
  referralBonus: null
}

// export const fetchLaunchDataAsync = (account): AppThunk => async (dispatch) => {
export const fetchLaunchDataAsync = createAsyncThunk<LaunchState, {account: string}>(
  'kaybcg/fetchLaunchData',
  async (account) => {

    const userContribution = await fetchContribution(account)
    const launchData = {
      start: await fetchStartTime(),
      end: await fetchEndTime(),
      balance: Number(ethers.utils.formatEther(await fetchBalance())),
      softCapReached: true,
      finalized: await fetchFinalized(),
      contribution: Number(ethers.utils.formatEther(userContribution[0].toString())),
      referralBonus: Number(ethers.utils.formatEther(userContribution[1].toString()))
    }

    // dispatch(setLaunchData(launchData))
    console.log("sniper fetchlaunchdataasync launchdata: ", launchData)

    return launchData
  }
)

export const LaunchSlice = createSlice({
  name: 'Launch',
  initialState,
  reducers: {
    setLaunchData: (state, action) => {
      // const launchData = action.payload
      // if (!state.start) {
      //   state.start = launchData.start
      // }
      // if (!state.end) {
      //   state.end = launchData.end
      // }      
      // state.balance = launchData.balance
      // state.softCapReached = launchData.softCapReached
      // state.finalized = launchData.finalized
      // state.contribution = launchData.contribution
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunchDataAsync.pending, (state) => {
        // state.status = 'loading'
      })
      .addCase(fetchLaunchDataAsync.fulfilled, (state, action) => {
        const launchData = action.payload
        if (!state.start) {
          state.start = launchData.start
        }
        if (!state.end) {
          state.end = launchData.end
        }      
        state.balance = launchData.balance
        state.softCapReached = launchData.softCapReached
        state.finalized = launchData.finalized
        state.contribution = launchData.contribution
        state.referralBonus = launchData.referralBonus
      })
      .addCase(fetchLaunchDataAsync.rejected, (state) => {
        // state.status = 'failed'
      })
  },
})

// Actions
export const { setLaunchData } = LaunchSlice.actions

export default LaunchSlice.reducer