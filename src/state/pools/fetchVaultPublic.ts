import BigNumber from 'bignumber.js'
import { convertSharesToCake } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import { getCakeVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestDexTokenRewards',
      'calculateTotalPendingDexTokenRewards',
    ].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedDexTokenBountyReward], [totalpendingDexTokenHarvest]] = await multicallv2(
      cakeVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    console.log("pppppppp",totalSharesAsBigNumber)
    const totalDexTokenInVaultEstimate = convertSharesToCake(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalDexTokenInVault: totalDexTokenInVaultEstimate.cakeAsBigNumber.toJSON(),
      estimatedDexTokenBountyReward: new BigNumber(estimatedDexTokenBountyReward.toString()).toJSON(),
      totalpendingDexTokenHarvest: new BigNumber(totalpendingDexTokenHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalDexTokenInVault: null,
      estimatedDexTokenBountyReward: null,
      totalpendingDexTokenHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getCakeVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(cakeVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
