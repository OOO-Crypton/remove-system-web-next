import axios, { AxiosRequestHeaders } from 'axios'
import Cookies from 'js-cookie'

import { memoizedRefreshToken } from './refreshToken'

axios.defaults.baseURL = `${process.env.APP_URL}/api`

axios.interceptors.request.use(
	async (config) => {
		const token = Cookies.get('accessToken')
		if (token) {
			config.headers = {
				...config.headers,
				authorization: `Bearer ${token}`,
			} as unknown as AxiosRequestHeaders
		}

		return config
	},
	(error) => Promise.reject(error)
)

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const config = error?.config

		if (error?.response?.status === 401 && !config?.sent) {
			config.sent = true

			const result = await memoizedRefreshToken()

			if (result?.token) {
				config.headers = {
					...config.headers,
					authorization: `Bearer ${result?.token}`,
				}
			}
			return axios(config)
		}
		return Promise.reject(error)
	}
)

export const axiosPrivate = axios
