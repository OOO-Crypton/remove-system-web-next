import { axiosPrivate } from 'api/axios'
import { toast } from 'react-toastify'

import { IFarm } from '@/shared/types/farm.types'

import { getFarmUrl } from '@/configs/api.config'

export const FarmsService = {
	async add() {
		const { data } = await axiosPrivate.post(getFarmUrl('add'), {
			name: 'test',
		})

		return data
	},

	async all() {
		const { data } = await axiosPrivate.get<IFarm[]>(getFarmUrl('all'))

		return data
	},

	async getById(id: number) {
		const { data } = await axiosPrivate.get<IFarm>(getFarmUrl(id.toString()))

		return data
	},

	async startFliList(farmId: number, flyId: number) {
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

	async startFarm(id: number) {
		try {
			const { status } = await axiosPrivate.get(getFarmUrl(`${id}/start`))
			toast.success('Ферма успешно запущена')

			return status
		} catch (error) {
			toast.error('Error server')
		}
	},

	async stopFarm(id: number) {
		try {
			const { status } = await axiosPrivate.get(getFarmUrl(`${id}/stop`))
			toast.success('Ферма успешно остановлена')

			return status
		} catch (error) {
			toast.error('Error server')
		}
	},

	async restartFarm(id: number) {
		try {
			const { status } = await axiosPrivate.get(getFarmUrl(`${id}/restart`))
			toast.success('Ферма успешно перезапущена')

			return status
		} catch (error) {
			toast.error('Error server')
		}
	},

	async deleteFarm(id: number) {
		try {
			const { status } = await axiosPrivate.delete(getFarmUrl(`delete/${id}`))
			toast.success('Ферма успешно удалена')
			return status
		} catch (error) {
			toast.error('Error server')
		}
	},
}
