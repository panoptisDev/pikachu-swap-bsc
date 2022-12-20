import { useContext } from 'react'
import { PoolsPageLayout, PoolsContext } from 'views/Pools'
import FarmCard from 'views/Pools/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/Pools/components/getDisplayApr'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useWeb3React } from '@pancakeswap/wagmi'

const PoolsHistoryPage = () => {
  const { account } = useWeb3React()
  const { chosenPoolsMemoized } = useContext(PoolsContext)
  const cakePrice = usePriceCakeBusd()

  return (
    <>
      {chosenPoolsMemoized.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
          cakePrice={cakePrice}
          account={account}
          removed
        />
      ))}
    </>
  )
}

PoolsHistoryPage.Layout = PoolsPageLayout

export default PoolsHistoryPage
