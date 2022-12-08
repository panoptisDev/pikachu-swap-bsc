import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PikachuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn PIKACHU through yield farming or win it in the Lottery, then stake it in CCF Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PikachuSwap), NFTs, and more, on a platform you can trust.',
  
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PikachuSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('PikachuSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('PikachuSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('PikachuSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('PikachuSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('PikachuSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('PikachuSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PikachuSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('PikachuSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PikachuSwap')}`,
      }
    default:
      return null
  }
}
