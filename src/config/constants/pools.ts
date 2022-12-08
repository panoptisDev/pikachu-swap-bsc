import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      56: '0x9066FDd1F40E7FDEB51560AB3E1D5a29d95F5392',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.046',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 1,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '',
      56: '0xcece7e90a5981054c9f278b20dae08c224a7eb0c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 2,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '',
      56: '0x56308b80a28980f8c7b5279d072440916322c5bd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 3,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      97: '',
      56: '0x3733d01b3b0bd36c8bf6be7afaf009114c169ec6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 4,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '',
      56: '0x2ced32e46fa2122cd3b8b8d832631656b196b6da',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 5,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '',
      56: '0x274036520eb1f2f72288879106d13adc1a3801f7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 6,
    stakingToken: serializedTokens.cpump,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '',
      56: '0xadf03f0c2529468bb82599b8ab1738479c992af0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  }
  
]

export default pools
