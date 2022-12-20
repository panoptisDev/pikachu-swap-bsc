import { ChainId } from '@pancakeswap/sdk'
import { SerializedFarm } from 'state/types'

const getPoolsAuctionData = (farms: SerializedFarm[], winnerPools: string[], auctionHostingEndDate: string) => {
  return farms.map((farm) => {
    const isAuctionWinnerFarm = winnerPools.find(
      (winnerFarm) => winnerFarm.toLowerCase() === farm.lpAddresses[ChainId.BSC].toLowerCase(),
    )
    return {
      ...farm,
      ...(isAuctionWinnerFarm && { isCommunity: true, auctionHostingEndDate }),
    }
  })
}

export default getPoolsAuctionData
