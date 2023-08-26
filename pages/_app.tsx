import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import '../app/assets/styles/globals.scss'
import MainProvider from '../app/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
