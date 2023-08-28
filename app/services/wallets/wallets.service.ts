import { axiosPrivate } from 'api/axios'

import { ICurrency, IWallet, IWalletForm } from '@/shared/types/wallet.type'

import { getWalletsUrl } from '@/configs/api.config'

export const WalletsService = {
	async getAll() {
		const { data } = await axiosPrivate.get<IWallet[]>(getWalletsUrl('all'))

		return data
	},

	async getById(id: string): Promise<IWallet> {
		const { data } = await axiosPrivate.get(getWalletsUrl(id))
		return data
	},

	async editById(id: string, body: IWalletForm) {
		const formData = new FormData()

		formData.append('Name', body.name)
		formData.append('Address', body.address)
		formData.append('CurrencyId', body.currency.toString())

		const { status } = await axiosPrivate.put(
			getWalletsUrl(`${id}/edit`),
			formData
		)

		return status
	},

	async create(body: IWalletForm) {
		const formData = new FormData()

		formData.append('Name', body.name)
		formData.append('Address', body.address)
		formData.append('CurrencyId', body.currency.toString())

		const { status } = await axiosPrivate.post(getWalletsUrl('add'), formData)

		return status
	},

	async getCurrenciesList(): Promise<ICurrency[]> {
		const { data } = await axiosPrivate.get(getWalletsUrl('currencies_list'))

		return data
	},

	async delete(id: string): Promise<number> {
		const { status } = await axiosPrivate.delete(getWalletsUrl(`delete/${id}`))
		return status
	},
}
