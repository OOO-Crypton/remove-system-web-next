import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { token } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>

	if (!isOnlyAdmin && !isOnlyUser) return <Children />

	if (!token) {
		router.replace(`/auth?redirect=${router.pathname}`)
		return null
	}

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('404')
		return null
	}

	const isUser = token

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/auth' &&
			router.replace(`/auth?redirect=${router.pathname}`)
		return null
	}
}

export default CheckRole
