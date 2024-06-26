import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, ILogin, IRegister } from './user.interface'

export const reg = createAsyncThunk<IAuthResponse, IRegister>(
	'auth/register',
	async (body, thunkAPI) => {
		try {
			const response = await AuthService.register(body)
			toast.success('Completed successfully')
			window.location.href = 'my-account'
			return response.data
		} catch (error: any) {
			switch (error.response.data) {
				case 'User already exists':
					toast.error('error.response.data')
					break
				case 'User registration falied':
					toast.error('Регистрация пользователя не удалась')
					break
				default:
					toast.error('Error request')
					break
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, ILogin>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			await AuthService.login(email, password)
			toast.success('Авторизация успешная')

			const token = Cookies.get('token')!.toString()
			const refreshToken = Cookies.get('refreshToken')!.toString()
			const decodeToken: any = jwtDecode(token)

			console.log(token, refreshToken)
			return {
				isAdmin: decodeToken.Role === 'Admin' ? true : false,
				token,
				refreshToken,
			}
		} catch (error) {
			toast.error('Error request')
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			// await AuthService.getNewTokens()

			const token = Cookies!.get('token')!.toString()
			const refreshToken = Cookies!.get('refreshToken')!.toString()
			const decodeToken: any = jwtDecode(token)

			return {
				isAdmin: decodeToken.Role === 'Admin' ? true : false,
				token,
				refreshToken,
			}
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toast.error('Your authorizaiton is finished, plz sign in again')
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
