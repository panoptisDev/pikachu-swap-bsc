import { Nft } from './types'
import { IPFS_GATEWAY } from '../../index'

const Nfts: Nft[] = [
  {
    name: 'Baller',
    description: 'Absolute (lottery) baller.',
    images: {
      lg: 'baller-lg.png',
      md: 'baller-md.png',
      sm: 'baller-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.png`,
    },
    video: {
      webm: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.webm`,
      mp4: `${IPFS_GATEWAY}/QmeMfJk6yxYmMd41ThDpqcdEJmKXZTF9EmFeP49D15NvsF/baller.mp4`,
    },
    identifier: 'baller',
    id: 20,
  },
  {
    name: 'Blueberries',
    description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
    images: {
      lg: 'blueberries-lg.png',
      md: 'blueberries-md.png',
      sm: 'blueberries-sm.png',
      ipfs: `${IPFS_GATEWAY}/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png`,
      blur: 'blueberries-blur.png',
    },
    identifier: 'blueberries',
    id: 2,
  },
]

export default Nfts
