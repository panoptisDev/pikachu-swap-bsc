import { Token, ChainId } from '@pancakeswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'yukla',
    address: '0x45Ea085d52a36A9b645729234220971e9B9Ae02c',
    isActive: true,
    name: '',
    poolBasic: {
      saleAmount: '0',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.33,
    },
    poolUnlimited: {
      saleAmount: '0',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.66,
    },
    currency: cakeBnbLpToken,
    token: tokens.yukla,
    releaseBlockNumber: 16714751,
    campaignId: '1',
    articleUrl: '#',
    tokenOfferingPrice: 1.0,
    version: 2,
  },
]

export default ifos
