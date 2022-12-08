const PANCCF_EXTENDED = 'https://tokens.cryptopreneur.finance/pancakeswap-extended.json'
const PANCCF_TOP100 = 'https://tokens.cryptopreneur.finance/pancakeswap-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCCF_TOP100,
  PANCCF_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
