import { getContentType } from 'api/api.helpers'
import { axiosPrivate } from 'api/axios'
import Cookies from 'js-cookie'

import { API_URL } from '@/configs/api.config'

import { IAuthResponse, IRegister, ITokens } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(body: IRegister) {
		const response = await axiosPrivate.post<IAuthResponse>(
			`${API_URL}${'/register'}`,
			body
		)

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axiosPrivate.post<ITokens>(`${API_URL}${'/login'}`, {
			email,
			password,
		})

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const token = Cookies.get('token')
		const response = await axiosPrivate.post<IAuthResponse>(
			`${API_URL}${`/refresh-token`}`,
			{ token: token, RefreshToken: refreshToken },
			{
				headers: getContentType(),
			}
		)

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},
}
