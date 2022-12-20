import { useCallback } from 'react'
import { unstakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakePools = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return unstakeFarm(masterChefContract, pid, amount)
    },
    [masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePools
