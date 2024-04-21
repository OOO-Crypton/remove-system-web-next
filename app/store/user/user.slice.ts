import { createSlice } from '@reduxjs/toolkit'

import { checkAuth, login, logout, reg } from './user.actions'
import { IUserInitialState } from './user.interface'

const initialState: IUserInitialState = {
	token: null,
	refreshToken: null,
	isLoading: false,
	isAdmin: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(reg.pending, (state) => {
				state.isLoading = true
			})
			.addCase(reg.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.token = payload.token
				state.refreshToken = payload.refreshToken
			})
			.addCase(reg.rejected, (state) => {
				state.isLoading = false
				state.token = null
				state.refreshToken = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.token = payload.token
				state.refreshToken = payload.refreshToken
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.token = null
				state.refreshToken = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.token = null
				state.refreshToken = null
			})
			.addCase(checkAuth.pending, (state) => {
				state.isLoading = true
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.token = payload.token
				state.refreshToken = payload.refreshToken
			})
			.addCase(checkAuth.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = userSlice
