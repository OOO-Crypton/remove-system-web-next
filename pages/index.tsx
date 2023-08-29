import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

const HomePage: NextPage = () => {
	return <Home />
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

export default HomePage
