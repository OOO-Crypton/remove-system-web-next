import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Input, Loader } from '@/components/ui'

import { ICurrency, IWallet, IWalletForm } from '@/shared/types/wallet.type'

import { WalletsService } from '@/services/wallets/wallets.service'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './Wallets.module.scss'

const WalletEditScreen: FC<{ id: string }> = ({ id }) => {
	const [wallet, setWallet] = useState<IWallet>()
	const [currency, setCurrency] = useState<ICurrency[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const wallet = await WalletsService.getById(id)
			const currency = await WalletsService.getCurrenciesList()

			setWallet(wallet)
			setCurrency(currency)
			setIsLoad(false)
		}

		getData()
	}, [id])

	const { register, handleSubmit, control, setValue } = useForm<IWalletForm>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<IWalletForm> = async (value) => {
		const status = await WalletsService.editById(wallet!.id, {
			...value,
			currency:
				value.currency !== undefined ? value.currency : wallet!.currency.id,
		})

		if (status === 200) {
			toast.success('Кошелек успешно изменен')
			push('/wallets')
		}
	}

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return (
		<div className={styles.editWallet}>
			{isLoad ? (
				<Loader />
			) : (
				<>
					<h1>Редактирование кошелка №{wallet?.id}</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="name">
							Название
							<Input
								type="text"
								{...register('name', {
									required: true,
								})}
								required
								defaultValue={wallet?.name}
								placeholder="Введите назавние"
							/>
						</label>
						<label htmlFor="currency">
							Кошелек
							<Controller
								control={control}
								name="currency"
								render={({ field: { ref } }) => (
									<Select
										id="currency"
										ref={ref}
										onChange={(value) =>
											handleCategoryInputChange('currency', value)
										}
										defaultValue={{
											value: wallet?.currency.id,
											label: wallet?.currency.name,
										}}
										options={currency.map((item) => ({
											value: item.id,
											label: item.name,
										}))}
										styles={SelectMyStyles}
										required
									/>
								)}
							/>
						</label>
						<label htmlFor="address">
							Название
							<Input
								type="text"
								{...register('address', {
									required: true,
								})}
								required
								defaultValue={wallet?.address}
								placeholder="Введите назавние"
							/>
						</label>
						<Button appearance="white" hover="green">
							Изменить
						</Button>
					</form>
				</>
			)}
		</div>
	)
}

export default WalletEditScreen
