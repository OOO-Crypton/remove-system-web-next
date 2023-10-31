import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from 'store/store'

import Layout from '@/components/layout/Layout'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import AuthProvider from './AuthProvider/AuthProvider'
import { FarmsWrapper } from './FarmsProvider/FarmProvider'
import HeadProvider from './HeadProvider/HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ToastContainer
						position="bottom-right"
						hideProgressBar={true}
						theme={'dark'}
						autoClose={3000}
					/>
					<AuthProvider Component={Component}>
						<FarmsWrapper>
							<Layout>{children}</Layout>
						</FarmsWrapper>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
