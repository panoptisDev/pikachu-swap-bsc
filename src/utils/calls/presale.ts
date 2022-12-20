import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'
import { ethers } from 'ethers'
import { parseEther } from "@ethersproject/units";
import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const contributePresaleWithReferral = async (presaleContract, amount, referral) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.buyTokensWithReferral(referral, { ...options, value: parseEther(amount), gasPrice })
  const receipt = await tx.wait()
}

export const contributePresaleWithoutReferral = async (presaleContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.buyTokensWithoutReferral({ ...options, value: parseEther(amount), gasPrice })
  const receipt = await tx.wait()
}

export const claimPresale = async (presaleContract) => {
  const gasPrice = getGasPrice()
  // const tx = await presaleContract.claimTokens({ ...options, gasPrice })
  // const receipt = await tx.wait()
  //   const gasPrice = getGasPrice()
  // const value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()

  return presaleContract.claimTokens({ ...options, gasPrice })
}

export const refundPresale = async (presaleContract) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.refund({ ...options, gasPrice })
  const receipt = await tx.wait()
}
