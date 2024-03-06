import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	data.token && Cookies.set('token', data.token)
	data.refreshToken && Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: ITokens) => {
	saveTokensStorage(data)
}

export const removeTokensStorage = () => {
	Cookies.remove('token')
	Cookies.remove('refreshToken')
}
