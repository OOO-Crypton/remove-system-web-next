import FarmScreen from '@/components/screens/farm/Farm'

import { NextPageAuth } from '@/shared/types/auth.types'

const FarmPage: NextPageAuth = () => {
	return <FarmScreen />
}

FarmPage.isOnlyUser = true

export default FarmPage
