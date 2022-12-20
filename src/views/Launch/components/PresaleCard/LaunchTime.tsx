import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, Text } from '@pancakeswap/uikit'
import { IfoStatus } from 'config/constants/types'
import { useLaunch } from 'state/launch/hooks'
import getTimePeriods from 'utils/getTimePeriods'
import { useTranslation } from '@pancakeswap/localization'
import $ from 'jquery';

export interface LaunchTimeProps {
  isLoading: boolean
  status: IfoStatus
  secondsUntilStart: number
  secondsUntilEnd: number
}

const Details = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
`

const Countdown = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`

const LaunchTime: React.FC<LaunchTimeProps> = ({
  isLoading,
  status,
  secondsUntilStart,
  secondsUntilEnd,
}) => {
  // const { t } = useTranslation()
  // const { launch: launchData } = useLaunch()
  // const suffix = status === 'coming_soon' ? 'Start' : 'Finish'

  // const [secondsRemaining, setSecondsRemaining] = useState(null)

  // useEffect(() => {
  //   const currentTime = Math.round(Date.now() / 1000)
  //   const countdownToUse = status === 'coming_soon' ? launchData.start - currentTime : launchData.end - currentTime
  //   setSecondsRemaining(countdownToUse)
  // }, [status, launchData.start, launchData.end])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSecondsRemaining((prev) => prev - 1)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])  

  // const timeUntil = getTimePeriods(secondsRemaining)

  // @ts-ignore
  // $( document ).ready(function() {
  //   // @ts-ignore
  //     window.$('.clock').FlipClock(secondsRemaining, {
  //     clockFace: 'DailyCounter',
  //     countdown: true,
  //     showSeconds: true
  //   })
  // });


  // if (isLoading) {
  //   return <Details>{t('Loading...')}</Details>
  // }
  
  // if (secondsRemaining <= 0) {
  //   return (
  //     <Details>
  //       <Text bold fontSize="24px">{t('Finished')}</Text>
  //     </Details>
  //   )
  // }

  return (
    <div />

  )
}

export default LaunchTime
