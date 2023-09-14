import { IMiner } from './flyList.type'
import { IUser } from './user.types'
import { IWallet } from './wallet.type'

export interface IFarm {
	id: number
	systemInfo: string
	localSystemAddress: string
	localSystemID: string
	containerGUID: string
	user: IUser
	activeFlightSheet: any
}

export interface ActiveFlightSheet {
	id: number
	name: string
	extendedConfig: string
	isActive: boolean
	miner: IMiner
	wallet: IWallet
	poolAddress: string
	user: IUser
}
