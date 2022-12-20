import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakePools = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {

      console.log(masterChefContract);
      return stakeFarm(masterChefContract, pid, amount)
    },
    [masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakePools
