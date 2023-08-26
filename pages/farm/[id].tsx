import FarmId from '@/components/screens/farm/FarmId'

import { NextPageAuth } from '@/shared/types/auth.types'

const FarmIdPage: NextPageAuth<{ id: string }> = ({ id }) => {
	return <FarmId id={id} />
}

interface IParams {
	id: string
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
