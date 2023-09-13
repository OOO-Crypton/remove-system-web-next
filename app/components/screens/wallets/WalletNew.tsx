import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Input } from '@/components/ui'

import { ICurrency, IWalletForm } from '@/shared/types/wallet.type'

import { WalletsService } from '@/services/wallets/wallets.service'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './Wallets.module.scss'

const WalletNewScreen: FC = () => {
	const [currency, setCurrency] = useState<ICurrency[]>([])

	const { push } = useRouter()

	useEffect(() => {
		const getCurrencies = async () => {
			const res = await WalletsService.getCurrenciesList()
			setCurrency(res)
		}
		getCurrencies()
	}, [])

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
	} = useForm<IWalletForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IWalletForm> = async (body) => {
		const status = await WalletsService.create(body)

		if (status === 200) {
			toast.success('Кошелёк добавлен')
			push('/wallets')
		}
	}

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return (
		<div className={styles.editWallet}>
			<h1>Создание нового кошелька</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="Name">
					Название
					<Input
						type="text"
						id="Name"
						{...register('name', {
							required: true,
						})}
						required
						placeholder="Введите назавние"
					/>
				</label>
				<label htmlFor="currency">
					Монета
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
								required
								options={currency.map((item) => ({
									value: item.id,
									label: item.name,
								}))}
								styles={SelectMyStyles}
							/>
						)}
					/>
				</label>
				<label htmlFor="address">
					Адрес кошелька
					<Input
						type="text"
						{...register('address', {
							required: true,
						})}
						required
						placeholder="Введите адрес кошелька"
					/>
				</label>
				<Button appearance="white" hover="green">
					Создать
				</Button>
			</form>
		</div>
	)
}

export default WalletNewScreen
