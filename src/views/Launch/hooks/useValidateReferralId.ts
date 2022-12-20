import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { usePresale } from 'hooks/useContract'

const useValidateReferralId = (referral: string) => {
  const [valid, setValid] = useState(2)
  const presaleContract = usePresale()
  useEffect(() => {
    const validateReferralId = async () => {
        try {
            const result = await presaleContract.contributions(referral);
            if(Number(ethers.utils.formatEther(result.contribution)) > 0) setValid(0)
            else setValid(1)
        } catch (error) {
            setValid(1)
        }
    }
    if(presaleContract && referral !== "") {
        validateReferralId()
    } else {
        setValid(2)
    }
  }, [referral, presaleContract])

  return valid
}
export default useValidateReferralId
