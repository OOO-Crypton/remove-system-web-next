import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

import { Button, Input, Loader } from '@/components/ui'

import { IFlyLists, IMiner, IPool } from '@/shared/types/flyList.type'
import { IWallet } from '@/shared/types/wallet.type'

import { FlightSheetsService, WalletsService } from '@/services/index'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const FlyListEditScreen: FC<{ id: string }> = ({ id }) => {
	const [flyList, setFlyList] = useState<IFlyLists>()
	const [wallet, setWallet] = useState<IWallet[]>([])
	const [pool, setPool] = useState<IPool[]>([])
	const [minerList, setMinerList] = useState<IMiner[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)

	useEffect(() => {
		const getData = async () => {
			const flyList = await FlightSheetsService.getById(id)
			const wallet = await WalletsService.getAll()
			const pool = await FlightSheetsService.getPoolList()
			const minerList = await FlightSheetsService.getMinerList()

			setFlyList(flyList)
			setWallet(wallet)
			setPool(pool)
			setMinerList(minerList)
			setIsLoad(false)
		}

		getData()
	}, [id])

	const { register, handleSubmit, control, setValue } = useForm<IFlyLists>({
		mode: 'onBlur',
	})

	const submit = handleSubmit((value) => {
		console.log(value)
	})

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return isLoad ? (
		<Loader />
	) : (
		<div className={styles.flyList}>
			<h1>Изменение полетного листа №{flyList!.id}</h1>
			<form onSubmit={submit}>
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
								onChange={(value) => handleCategoryInputChange('pool', value)}
								defaultValue={{
									value: flyList?.pool.id,
									label: flyList?.pool.name,
								}}
								options={pool.map((item) => ({
									value: item.id,
									label: item.name,
								}))}
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
