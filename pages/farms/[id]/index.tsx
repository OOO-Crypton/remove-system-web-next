import FarmId from '@/components/screens/farm/FarmId'

import { NextPageAuth } from '@/shared/types/auth.types'

const FarmIdPage: NextPageAuth<{ id: number }> = ({ id }) => {
	return <FarmId id={id} />
}

export async function getServerSideProps({ params }: any) {
	return {
		props: {
			id: params.id,
		},
	}
}

FarmIdPage.isOnlyUser = true

export default FarmIdPage
