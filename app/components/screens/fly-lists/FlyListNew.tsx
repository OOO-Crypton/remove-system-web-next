import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Heading, Input, Loader } from '@/components/ui'

import { IFlyListsForm } from '@/shared/types/flyList.type'
import { IWallet } from '@/shared/types/wallet.type'

import { FlightSheetsService, WalletsService } from '@/services/index'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const FlyListNewScreen = () => {
	const [wallet, setWallet] = useState<IWallet[]>()
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const wallet = await WalletsService.getAll()

			setWallet(wallet)
			setIsLoad(false)
		}

		getData()
	}, [])

	const { register, handleSubmit, control, setValue } = useForm<IFlyListsForm>({
		mode: 'onBlur',
	})

	const submit = handleSubmit(async (value) => {
		const { status } = await FlightSheetsService.create(value)

		if (status === 200) {
			toast.success('Полетный лист добавлен')
			push('/fly-lists')
		}
	})

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return (
		<div className={styles.flyList}>
			{isLoad ? (
				<Loader />
			) : (
				<>
					<Heading title="Создание нового полетного листа" />
					<form onSubmit={submit}>
						<label htmlFor="name">
							Название
							<Input
								type="text"
								{...register('name', {
									required: true,
								})}
								required
								placeholder="Введите назавние"
							/>
						</label>
						<label htmlFor="wallet">
							Кошелек
							<Controller
								control={control}
								name="wallet"
								render={({ field: { ref } }) => (
									<Select
										id="wallet"
										ref={ref}
										onChange={(value) =>
											handleCategoryInputChange('wallet', value)
										}
										options={wallet!.map((item) => ({
											value: item.id,
											label: item.name,
										}))}
										styles={SelectMyStyles}
										required
									/>
								)}
							/>
						</label>
						<label htmlFor="pool">
							Пулл
							<Controller
								control={control}
								name="pool"
								render={({ field: { ref } }) => (
									<Select
										id="pool"
										ref={ref}
										onChange={(value) =>
											handleCategoryInputChange('pool', value)
										}
										options={[{ label: 'pull', value: 1 }]}
										styles={SelectMyStyles}
										required
									/>
								)}
							/>
						</label>
						<label htmlFor="miner">
							Майнер
							<Controller
								control={control}
								name="miner"
								render={({ field: { ref } }) => (
									<Select
										id="miner"
										ref={ref}
										onChange={(value) =>
											handleCategoryInputChange('miner', value)
										}
										options={[{ label: 'miner', value: 1 }]}
										styles={SelectMyStyles}
										required
									/>
								)}
							/>
						</label>
						<Button appearance="white" hover="green">
							Создать
						</Button>
					</form>
				</>
			)}
		</div>
	)
}

export default FlyListNewScreen
