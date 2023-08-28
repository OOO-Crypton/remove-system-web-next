import FarmNew from '@/components/screens/farm/FarmNew'

import { NextPageAuth } from '@/shared/types/auth.types'

const FarmNewListPage: NextPageAuth = () => {
	return <FarmNew />
}

FarmNewListPage.isOnlyUser = true

export default FarmNewListPage
