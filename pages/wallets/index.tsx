import Wallets from '@/components/screens/wallets/Wallets'

import { NextPageAuth } from '@/shared/types/auth.types'

const WalletsPage: NextPageAuth = () => {
	return <Wallets />
}

WalletsPage.isOnlyUser = true

export default WalletsPage
