import { useCallback } from 'react'
import { refundPresale } from 'utils/calls'
import { usePresale } from 'hooks/useContract'

const useRefund = () => {
  const presaleContract = usePresale()

  const handleRefund = useCallback(
    async () => {
      const txHash = await refundPresale(presaleContract)
      console.info(txHash)
    },
    [presaleContract],
  )

  return { onRefund: handleRefund }
}

export default useRefund
