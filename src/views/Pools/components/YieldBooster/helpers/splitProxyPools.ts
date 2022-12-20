import { SerializedFarmConfig } from 'config/constants/types'

interface SplitProxyPoolsResponse {
  normalPools: SerializedFarmConfig[]
  farmsWithProxy: SerializedFarmConfig[]
}

export default function splitProxyPools(farms: SerializedFarmConfig[]): SplitProxyPoolsResponse {
  const { normalPools, farmsWithProxy } = farms.reduce(
    (acc, farm) => {
      if (farm.boosted) {
        return {
          ...acc,
          farmsWithProxy: [...acc.farmsWithProxy, farm],
        }
      }
      return {
        ...acc,
        normalPools: [...acc.normalPools, farm],
      }
    },
    { normalPools: [], farmsWithProxy: [] },
  )

  return { normalPools, farmsWithProxy }
}
