import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Input, Loader, SubHeading } from '@/components/ui'

import { IFlyLists, IFlyListsForm, IMiner } from '@/shared/types/flyList.type'
import { IWallet } from '@/shared/types/wallet.type'

import { FlightSheetsService, WalletsService } from '@/services/index'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const FlyListEditScreen: FC<{ id: string }> = ({ id }) => {
	const [flyList, setFlyList] = useState<IFlyLists>()
	const [wallet, setWallet] = useState<IWallet[]>([])
	const [minerList, setMinerList] = useState<IMiner[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const flyList = await FlightSheetsService.getById(id)
			const wallet = await WalletsService.getAll()
			const minerList = await FlightSheetsService.getMinerList()

			setFlyList(flyList)
			setWallet(wallet)
			setMinerList(minerList)
			setIsLoad(false)
		}

		getData()
	}, [id])

	const { register, handleSubmit, control, setValue } = useForm<IFlyListsForm>({
		mode: 'onBlur',
		defaultValues: {
			name: flyList?.name,
			wallet: flyList?.wallet.id,
			pool: flyList?.poolAddress,
			miner: flyList?.miner.id.toString(),
		},
	})

	const onSubmit: SubmitHandler<IFlyListsForm> = async (value) => {
		const status = await FlightSheetsService.editById(id, value)

		if (status === 200) {
			toast.success('Полетный лист успешно изменен')
			push('/fly-lists')
		}
	}

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return isLoad ? (
		<Loader />
	) : (
		<div className={styles.flyList}>
			<SubHeading title={`Изменение полетного листа №${flyList!.id}`} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">
					Название
					<Input
						type="text"
						{...register('name', {
							required: true,
						})}
						required
						defaultValue={flyList!.name}
						placeholder="Введите назавние"
					/>
				</label>
				<label htmlFor="wallet">
					Кошелек
					<Controller
						control={control}
						name="wallet"
						defaultValue={flyList?.wallet.id.toString()}
						render={({ field: { ref } }) => (
							<Select
								id="wallet"
								ref={ref}
								onChange={(value) => handleCategoryInputChange('wallet', value)}
								defaultValue={{
									value: flyList?.wallet.id,
									label: flyList?.wallet.name,
								}}
								options={wallet.map((item) => ({
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
						defaultValue={flyList?.poolAddress}
						placeholder="Введите пул"
					/>
				</label>
				<label htmlFor="miner">
					Майнер
					<Controller
						control={control}
						name="miner"
						defaultValue={flyList?.miner.id.toString()}
						render={({ field: { ref } }) => (
							<Select
								id="miner"
								ref={ref}
								onChange={(value) => handleCategoryInputChange('miner', value)}
								defaultValue={{
									value: flyList?.miner.id,
									label: flyList?.miner.name,
								}}
								options={minerList.map((item) => ({
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
		</div>
	)
}

export default FlyListEditScreen
