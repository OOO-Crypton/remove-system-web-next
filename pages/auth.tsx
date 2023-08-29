import { GetStaticProps, NextPage } from 'next'

import Auth from '@/components/screens/login/Auth'

const LoginPage: NextPage = () => {
	return <Auth />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		return {
			props: {},
			revalidate: 10,
		}
	} catch (e) {
		return {
			notFound: true,
			revalidate: 60,
		}
	}
}

export default LoginPage
