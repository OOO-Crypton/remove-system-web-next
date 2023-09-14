import { IUser } from './user.types'
import { IWallet } from './wallet.type'

export interface IFlyLists {
	id: number
	name: string
	extendedConfig: string
	miner: IMiner
	wallet: IWallet
	poolAddress: string
	user: IUser
}

export interface IMiner {
	id: number
	name: string
	minerInfo: string
}

export interface IPoolAddress {
	id: number
	address: string
}

export interface IFlyListsForm {
	name: string
	extendedConfig: string
	miner: string
	wallet: string
	pool: string
}
