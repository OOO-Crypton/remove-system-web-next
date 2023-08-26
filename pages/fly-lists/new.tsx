import FlyListNew from '@/components/screens/fly-lists/FlyListNew'

import { NextPageAuth } from '@/shared/types/auth.types'

const FlyNewListPage: NextPageAuth = () => {
	return <FlyListNew />
}

FlyNewListPage.isOnlyUser = true

export default FlyNewListPage
