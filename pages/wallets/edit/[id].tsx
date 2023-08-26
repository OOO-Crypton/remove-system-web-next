import WalletEdit from '@/components/screens/wallets/WalletEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const WalletEditPage: NextPageAuth<{ id: string }> = ({ id }) => {
	return <WalletEdit id={id} />
}

export async function getServerSideProps({ params }: any) {
	return {
		props: {
			id: params.id,
		},
	}
}

WalletEditPage.isOnlyUser = true

export default WalletEditPage
