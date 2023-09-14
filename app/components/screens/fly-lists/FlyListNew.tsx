import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Heading, Input, Loader } from '@/components/ui'

import { IFlyListsForm, IMiner } from '@/shared/types/flyList.type'
import { IWallet } from '@/shared/types/wallet.type'

import { FlightSheetsService, WalletsService } from '@/services/index'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const FlyListNewScreen = () => {
	const [wallet, setWallet] = useState<IWallet[]>()
	const [miner, setMiner] = useState<IMiner[]>()
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const wallet = await WalletsService.getAll()
			const miner = await FlightSheetsService.getMinerList()
			setWallet(wallet)
			setMiner(miner)
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
								placeholder="Введите название"
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
										placeholder="Выберите кошелек"
										required
									/>
								)}
							/>
						</label>
						<label htmlFor="pool">
							Пул
							<Input
								type="text"
								{...register('pool', {
									required: true,
								})}
								required
								placeholder="Введите пул"
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
										options={miner?.map((item) => ({
											value: item.id,
											label: item.name,
										}))}
										styles={SelectMyStyles}
										placeholder="Выберите майнер"
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
