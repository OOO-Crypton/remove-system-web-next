import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { token } = useAuth()

	const { query, push } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		console.log(token, redirect)

		if (token) push(redirect)
	}, [token, redirect, push])
}
