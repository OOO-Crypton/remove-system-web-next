import { ICoin } from './flyList.type'

export interface IWallet {
	id: string
	name: string
	address: string
	coin: ICoin
}
