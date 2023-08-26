export interface IFarm {
	consumptionAll: number
	hashrateAll: number
	id: string
	type: string
	gpus: IGPU[]
	cpu: string
	motherboard: string
	version: string
	ipAddress: string
}

export interface IGPU {
	id: string
	name: string
	status: EGPUStatus
	hashrate: number
	temperature: number
	fanSpeed: number
	powerConsumption: number
	core: number
	memory: number
}

export enum EGPUStatus {
	off = 0,
	on = 1,
}
