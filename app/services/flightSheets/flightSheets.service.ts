import { axiosPrivate } from 'api/axios'

import { IFlyLists, IFlyListsForm, IMiner } from '@/shared/types/flyList.type'

import { getFlightSheetsUrl } from '@/configs/api.config'

export const FlightSheetsService = {
	async create(body: IFlyListsForm) {
		const formData = new FormData()

		formData.append('Name', body.name)
		formData.append('ExtendedConfig', '')
		formData.append('MinerId', body.miner)
		formData.append('WalletId', body.wallet)
		formData.append('PoolAddress', body.pool)

		return await axiosPrivate.post(getFlightSheetsUrl('add'), formData)
	},

	async deleteById(id: number) {
		return await axiosPrivate.delete(getFlightSheetsUrl(`delete/${id}`))
	},

	async getAll(): Promise<IFlyLists[]> {
		const { data } = await axiosPrivate.get(getFlightSheetsUrl('all'))

		return data
	},

	async getById(id: string): Promise<IFlyLists> {
		const { data } = await axiosPrivate.get(getFlightSheetsUrl(id))

		return data
	},

	async getMinerList(): Promise<IMiner[]> {
		const { data } = await axiosPrivate.get(getFlightSheetsUrl('miners_list'))

		return data
	},

	async editById(id: string, body: IFlyListsForm) {
		const formData = new FormData()

		formData.append('Name', body.name)
		formData.append('ExtendedConfig', body.extendedConfig)
		formData.append('MinerId', body.miner)
		formData.append('WalletId', body.wallet)
		formData.append('PoolAddress', body.pool)

		const { status } = await axiosPrivate.put(
			getFlightSheetsUrl(`${id}/edit`),
			formData
		)
		return status
	},
}
