import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Swap'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        supportChainIds: [ChainId.BSC],
        items: [
        
        ],
      },
       {
        label: t('Liquidity'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/liquidity',
        showItemsOnMobile: false,
        supportChainIds: [ChainId.BSC],
        items: [
        
        ],
      },
      // {
      //   label: t('Limit'),
      //   icon: SwapIcon,
      //   supportChainIds: [ChainId.BSC],
      //   href: '/limit-orders',
      //   showItemsOnMobile: false,
      //   image: '/images/decorations/3d-coin.png',
      //   items: [
        
      //   ],
      // },
      // {
      //   label: t('Launch'),
      //   icon: SwapIcon,
      //   supportChainIds: [ChainId.BSC],
      //   href: '/launch',
      //   showItemsOnMobile: false,
      //   image: '/images/decorations/3d-coin.png',
      //   items: [
        
      //   ],
      // },
      {
        label: t('Farms'),
        href: '/farms',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        
        image: '/images/decorations/pe2.png',
        items: [
          
        ],
      },
      {
        label: t('Pools'),
        href: '/pools',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        image: '/images/decorations/pe2.png',
        items: [
        
        ],
      },
    
      // {
      //   label: t('NFT'),
      //   href: `${nftsBaseUrl}`,
      //   icon: NftIcon,
      //   fillIcon: NftFillIcon,
      //   supportChainIds: [ChainId.BSC],
      //   image: '/images/decorations/nft.png',
      //   items: [
        
      //   ],
      // },
      // {
      //   label: t('Lottery'),
      //   href: '/lottery',
      //   icon: EarnIcon,
      //   fillIcon: EarnFillIcon,
      //   supportChainIds: [ChainId.BSC],
      //   image: '/images/decorations/lottery.png',
      //   items: [
        
      //   ],
      // },
      {
        label: 'More',
        href: '/',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
      
          {
            label: t('twitter'),
            href: 'https://twitter.com/WhaleHarvest',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('telegram'),
            href: 'https://t.me/whaleharvest',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
        ]
      },
    ]

export default config


