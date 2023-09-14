import { IUser } from './user.types'

export interface IWallet {
	id: string
	name: string
	address: string
	user: IUser
	currency: ICurrency
}

export interface IWalletForm {
	name: string
	address: string
	currency: string
}

export interface ICurrency {
	id: number
	name: string
}
