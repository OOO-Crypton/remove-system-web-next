import { IUser } from './user.types'
import { IWallet } from './wallet.type'

export interface IFlyLists {
	id: number
	name: string
	extendedConfig: string
	miner: IMiner
	wallet: IWallet
	pool: IPool
	user: IUser
}

export interface IMiner {
	id: number
	name: string
	minerInfo: string
}

export interface IPool {
	id: number
	name: string
	poolAddresses: IPoolAddress[]
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
