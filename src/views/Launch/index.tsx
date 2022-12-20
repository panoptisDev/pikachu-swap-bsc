import React from 'react'
import styled from 'styled-components'
import { Heading, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { launchConfig } from 'config/constants'
import { useLaunch } from 'state/launch/hooks'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import Introduction from './components/Introduction'
import PresaleCard from './components/PresaleCard'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-top:30px;
  margin-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.xs} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: 1fr 1fr;
  }
`

const Launch: React.FC = () => {
  const { t } = useTranslation()
  const { launch } = useLaunch()

  const getUTCTime = (timestamp) => {
    const date = new Date(timestamp * 1000)    
    return date.toUTCString().toLocaleString()
  }

  return (
    <>
      <Page>
        <PageHeader>
          <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
            <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
              <Heading as="h1" scale="xl" color="textSubtle" mb="24px">
                {t('Initial Launch')}
              </Heading>
              <Heading scale="lg" color="textSubtle">
                {t(`Participate in Exclusive ICO's and be early on the OvenSwap project.`)}
              </Heading>
              <Heading scale="md" color="textSubtle" mt="20px">
                {t(`Pre-sale Start`)} : {t(`${getUTCTime(launch.start)}`)} 
              </Heading>
              <Heading scale="md" color="textSubtle" mt="5px">
                 {t(`Pre-sale Finish`)} : {t( `${getUTCTime(launch.end)}`)} 
              </Heading>
            </Flex>
          </Flex>
        </PageHeader>
        <Wrapper>
          <PresaleCard launch={launchConfig} />
          <Introduction />
        </Wrapper>
      </Page>
    </>
  )
}

export default Launch
