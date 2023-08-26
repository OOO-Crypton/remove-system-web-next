import { IWallet } from './wallet.type'

export interface IFlyLists {
	id: string
	name: string
	coin: ICoin
	wallet: IWallet
	pull: IPull
	miner: IMiner
	isActive: boolean
}

export interface IMiner {
	id: string
	name: string
}

export interface ICoin {
	id: string
	name: string
	icon?: string
}

export interface IPull {
	id: string
	name: string
}
