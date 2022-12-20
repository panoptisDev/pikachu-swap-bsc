import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { useFastRefreshEffect, useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import { State, LaunchState } from '../types'
import { fetchLaunchDataAsync } from '.'

export const useFetchLaunch = (account) => {
  // const { fastRefresh } = useFastRefreshEffect()
  const dispatch = useAppDispatch()
  
  useSlowRefreshEffect(() => {
    // @ts-ignore

    if(account)
      dispatch(fetchLaunchDataAsync(account))
    // fetchLaunchDataAsync(account)
  }, [dispatch, account])

}

export const useLaunch = (): { launch: LaunchState } => {


  const { start, end, balance, softCapReached, finalized, contribution, referralBonus } = useSelector((state: State) => ({
    start: state.launch.start,
    end: state.launch.end,
    balance: state.launch.balance,
    softCapReached: state.launch.softCapReached,
    finalized: state.launch.finalized,
    contribution: state.launch.contribution,
    referralBonus: state.launch.referralBonus,
  }))
  const launch = {
    start,
    end,
    balance,
    softCapReached,
    finalized,
    contribution,
    referralBonus,
  }
  
  return { launch }


  // const [launch, setLaunch] = useState<LaunchState>()

  // useEffect(() => {
  //   const getLaunchInfo = () => {

  //   }

  //   getLaunchInfo()
  // }, [start, end, balance, softCapReached, finalized, contribution])
}