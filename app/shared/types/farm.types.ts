import { IMiner } from './flyList.type'
import { IUser } from './user.types'
import { IWallet } from './wallet.type'

export interface IFarmMonit {
	Farm: number
	ActiveFlightSheetId: number
	Stat: Stat[]
	Message: string
}

export interface Stat {
	FullName: string
	CCDType: number
	CardManufacturer: string
	CCDModel: string
	GPUFrequency: string
	MemoryFrequency: string
	MonitoringView: MonitoringView
}

export interface MonitoringView {
	Id: string
	Date: string
	IsActive: boolean
	CurrentHashrate: number
	GPUTemperature: number
	FanRPM: number
	EnergyConsumption: number
}

export interface IFarm {
	id: number
	name: string
	systemInfo: SystemInfo
	localSystemAddress: string
	localSystemID: string
	containerGUID: string
	user: IUser
	activeFlightSheet: ActiveFlightSheet
}

export interface SystemInfo {
	motherboard: string
	cpu: string
	osVersion: string
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
