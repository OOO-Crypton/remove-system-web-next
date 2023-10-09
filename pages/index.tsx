import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

const HomePage: NextPage = () => {
	return <Home />
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

export default HomePage
