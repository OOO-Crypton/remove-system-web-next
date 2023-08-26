export interface IUserState {
	email: string
	token: string
	refreshToken: string
	isAdmin: boolean
}

export interface ITokens {
	token: string
	refreshToken: string
}

export interface IUserInitialState {
	token: string | null
	refreshToken: string | null
	isLoading: boolean
}

export interface IRegister {
	email: string
	password: string
	userName: string
	phone: string
}

export interface ILogin {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	isAdmin: boolean
}
