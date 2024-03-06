import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { Loader } from '@/components/ui/Loader/Loader'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { token, isLoading } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const token = Cookies.get('token')
		if (token) checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && token) logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : isLoading ? (
		<Loader />
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
