import { axiosPrivate } from 'api/axios'

import { IFarm } from '@/shared/types/farm.types'

import { getFarmUrl } from '@/configs/api.config'

export const FarmsService = {
	async add() {
		const { data } = await axiosPrivate.post(getFarmUrl('add'))

		return data
	},

	async all() {
		const { data } = await axiosPrivate.get<IFarm[]>(getFarmUrl('all'))

		return data
	},

	async getById(id: string) {
		const { data } = await axiosPrivate.get<IFarm>(getFarmUrl(id))

		return data
	},

	async startFliList(farmId: string, flyId: string) {
		const { status } = await axiosPrivate.patch(
			getFarmUrl(`${farmId}/switch_flight_sheet`),
			flyId,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		return status
	},
}
