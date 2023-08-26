import WalletNew from '@/components/screens/wallets/WalletNew'

import { NextPageAuth } from '@/shared/types/auth.types'

const WalletNewPage: NextPageAuth = () => {
	return <WalletNew />
}

WalletNewPage.isOnlyUser = true

export default WalletNewPage
