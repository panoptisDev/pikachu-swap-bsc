import { useState } from 'react'
import styled from 'styled-components'
// import { Box, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import PageSection from 'components/PageSection'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import Link from 'next/link'
import { useFetchLottery, useLottery } from 'state/lottery/hooks'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import useGetNextLotteryEvent from './hooks/useGetNextLotteryEvent'
import useStatusTransitions from './hooks/useStatusTransitions'
import Hero from './components/Hero'

import NextDrawCard from './components/NextDrawCard'
import Countdown from './components/Countdown'
import HistoryTabMenu from './components/HistoryTabMenu'
import YourHistoryCard from './components/YourHistoryCard'
import AllHistoryCard from './components/AllHistoryCard'
import CheckPrizesSection from './components/CheckPrizesSection'
import HowToPlay from './components/HowToPlay'
import useShowMoreUserHistory from './hooks/useShowMoreUserRounds'
import { PageMeta } from '../../components/Layout/Page'
import Page from '../Page'



const LotteryPage = styled.div`
  min-height: calc(100vh - 64px);
`

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Lottery = () => {
  useFetchLottery()
  useStatusTransitions()
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const {
    currentRound: { status, endTime },
  } = useLottery()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const endTimeAsInt = parseInt(endTime, 10)
  const { nextEventTime, postCountdownText, preCountdownText } = useGetNextLotteryEvent(endTimeAsInt, status)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()


  return (
    <Page>
      <StyledNotFound>
        
     
        <img src="/images/lottery.png" alt={t('auction bunny')} />
        <Link href="/" passHref>
          <Button as="a" scale="sm">
            {t('Back Home')}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default Lottery
