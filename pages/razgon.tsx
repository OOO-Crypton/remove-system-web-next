import { GetStaticProps, NextPage } from 'next'

import Razgon from '@/screens/Razgon/Razgon'

const RazgonPage: NextPage = () => {
	return <Razgon />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		return {
			props: {},
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default RazgonPage
