import { useContext } from 'react'
import { PoolsPageLayout, PoolsContext } from 'views/Pools'
import FarmCard from 'views/Pools/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/Pools/components/getDisplayApr'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useWeb3React } from '@pancakeswap/wagmi'
import ProxyFarmContainer, {
  YieldBoosterStateContext,
} from 'views/Pools/components/YieldBooster/components/ProxyFarmContainer'

const ProxyFarmCardContainer = ({ farm }) => {
  const { account } = useWeb3React()
  const cakePrice = usePriceCakeBusd()

  const { proxyFarm, shouldUseProxyFarm } = useContext(YieldBoosterStateContext)
  const finalFarm = shouldUseProxyFarm ? proxyFarm : farm

  return (
    <FarmCard
      key={finalFarm.pid}
      farm={finalFarm}
      displayApr={getDisplayApr(finalFarm.apr, finalFarm.lpRewardsApr)}
      cakePrice={cakePrice}
      account={account}
      removed={false}
    />
  )
}

const PoolsPage = () => {
  const { account } = useWeb3React()
  const { chosenPoolsMemoized } = useContext(PoolsContext)
  const cakePrice = usePriceCakeBusd()
  return (
    <>
      {chosenPoolsMemoized.map((farm) =>
        farm.boosted ? (
          <ProxyFarmContainer farm={farm} key={farm.pid}>
            <ProxyFarmCardContainer farm={farm} />
          </ProxyFarmContainer>
        ) : (
          <FarmCard
            key={farm.pid}
            farm={farm}
            displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
            cakePrice={cakePrice}
            account={account}
            removed={false}
          />
        ),
      )}
    </>
  )
}

PoolsPage.Layout = PoolsPageLayout

export default PoolsPage
