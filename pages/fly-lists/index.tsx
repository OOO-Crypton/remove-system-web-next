import FlyList from '@/components/screens/fly-lists/FlyLists'

import { NextPageAuth } from '@/shared/types/auth.types'

const FlyListsPage: NextPageAuth = () => {
	return <FlyList />
}

FlyListsPage.isOnlyUser = true

export default FlyListsPage
