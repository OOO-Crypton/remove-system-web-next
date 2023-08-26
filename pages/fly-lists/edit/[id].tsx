import FlyListEdit from '@/components/screens/fly-lists/FlyListEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const EditFlyListPage: NextPageAuth<{ id: string }> = ({ id }) => {
	return <FlyListEdit id={id} />
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

EditFlyListPage.isOnlyUser = true

export default EditFlyListPage
