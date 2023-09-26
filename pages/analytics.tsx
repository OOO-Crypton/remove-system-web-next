import AnalyticsScreen from '@/components/screens/analytics/Analytics'

import { NextPageAuth } from '@/shared/types/auth.types'

const AnalyticsPage: NextPageAuth = () => {
	return <AnalyticsScreen />
}

AnalyticsPage.isOnlyUser = true

export default AnalyticsPage
