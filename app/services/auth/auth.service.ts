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
		await axiosPrivate.post<ITokens>(
			`${API_URL}${'/login'}`,
			{
				email,
				password,
			},
			{
				headers: { credentials: 'include' },
			}
		)
		// console.log(response)

		// if (response.data.token) {
		// 	saveToStorage(response.data)
		// }
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const response = await axiosPrivate.post<IAuthResponse>(
			`${API_URL}${`/refresh-token`}`,
			null,
			{
				headers: {
					credentials: 'include',
				},
			}
		)

		if (response.data.token) {
			saveToStorage(response.data)
		}

		return response
	},
}
