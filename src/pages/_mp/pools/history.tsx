import PoolsMpPageLayout from 'views/Pools/MpPageLayout'
import PoolsHistoryPage from 'pages/farms/history'

const MPPoolsHistoryPage = () => {
  return <PoolsHistoryPage />
}

MPPoolsHistoryPage.Layout = PoolsMpPageLayout
MPPoolsHistoryPage.mp = true

export default MPPoolsHistoryPage
