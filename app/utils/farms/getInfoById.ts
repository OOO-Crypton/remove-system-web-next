import { IFarmMonit } from '@/shared/types/farm.types'

export const getGPUCountAll = (arr: IFarmMonit[]) => {
	let count = 0

	arr.map((farm) => {
		count += farm.Stat?.length
	})

	return count
}

export const getGPUCountById = (arr: IFarmMonit[], id: number) => {
	let count = 0

	if (arr.find((item) => item.Farm === id)?.Stat)
		count = arr.find((item) => item.Farm === id)!.Stat.length

	return count
}

export const getEnergyAll = (arr: IFarmMonit[]) => {
	let count = 0

	arr.map((farm) => {
		farm.Stat?.map((item) => {
			count += item.MonitoringView.EnergyConsumption
		})
	})

	return count
}

export const getEnergyById = (arr: IFarmMonit[], id: number) => {
	let count = 0

	arr
		.find((item) => item.Farm === id)
		?.Stat?.map((item) => {
			count += item.MonitoringView.EnergyConsumption
		})

	return count
}

export const getHashrateAll = (arr: IFarmMonit[]) => {
	let count = 0

	arr.map((farm) => {
		farm.Stat?.map((item) => {
			count += item.MonitoringView.CurrentHashrate
		})
	})

	return count
}

export const getHashrateById = (arr: IFarmMonit[], id: number) => {
	let count = 0

	arr
		.find((item) => item.Farm === id)
		?.Stat?.map((item) => {
			count += item.MonitoringView.CurrentHashrate
		})

	return count
}
