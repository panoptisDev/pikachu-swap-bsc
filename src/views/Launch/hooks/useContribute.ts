import { useCallback } from 'react'
import { contributePresaleWithoutReferral, contributePresaleWithReferral } from 'utils/calls'
import { usePresale } from 'hooks/useContract'

const useContribute = () => {
  const presaleContract = usePresale()

  const handleContributeWithReferral = useCallback(
    async (amount: string, referral: string) => {
      const txHash = await contributePresaleWithReferral(presaleContract, amount, referral)
      console.info(txHash)
    },
    [presaleContract],
  )

  const handleContributeWithoutReferral = useCallback(
    async (amount: string) => {
      const txHash = await contributePresaleWithoutReferral(presaleContract, amount)
      console.info(txHash)
    },
    [presaleContract],
  )

  return { onContributeWithReferral: handleContributeWithReferral, 
    onContributeWithoutReferral: handleContributeWithoutReferral }
}

export default useContribute
