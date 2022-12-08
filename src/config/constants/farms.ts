import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'PIKACHUSWAP',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x6673a335A4E9c46bC08035E656aA09f5a929Ef27',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'PIKACHU-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x716fD1dC99FB43dE86F24bE0aCe06d84599CBA25',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf4BbEf4DF031D21a6296905A9522C1204d217A4E',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'Pikachu-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8C5cd878Bc279666958D1AE192E8847c5b8DD589',
    },
    token: serializedTokens.crf,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcc8E898Afebf2692587A28FDB933394a231327D7',
    },
    token: serializedTokens.pancake,
    quoteToken: serializedTokens.busd,
  }
]

export default farms
