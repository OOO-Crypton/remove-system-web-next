import { GetStaticProps, NextPage } from 'next'

import RegisterScreen from '@/components/screens/register/Register'

const RegisterPage: NextPage = () => {
	return <RegisterScreen />
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

export default RegisterPage
