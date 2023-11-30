import { axiosPrivate } from 'api/axios'
import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

import { Button, Input, Loader, LoaderSmall } from '@/components/ui'

import { ICurrency } from '@/shared/types/wallet.type'

import { WalletsService } from '@/services/index'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './Analytics.module.scss'

const AnalyticsScreen: FC = () => {
	const [currencies, setCurrencies] = useState<ICurrency[]>([])
	const [date, setData] = useState<any[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)
	const [isLoader, setIsLoader] = useState<boolean>(false)

	useEffect(() => {
		const fetch = async () => {
			const currencies = await WalletsService.getCurrenciesList()
			setCurrencies(currencies)
		}
		fetch()
	}, [])

	const { register, handleSubmit, control, setValue } = useForm({
		mode: 'onBlur',
	})

	const submit = handleSubmit(async (value) => {
		setIsLoad(true)
		setIsLoader(true)
		const { data } = await axiosPrivate.get(
			`predictions/get_prediction?HashRate=${value.hashRate}&CurrencyId=${value.currenciesId}`
		)

		console.log(data, value.currenciesId)
		setData(
			data.map((item: any) => {
				return {
					data: new Date(item.date).toDateString(),
					prediction: Math.round(item.prediction),
				}
			})
		)
		setIsLoad(false)
		setIsLoader(false)
	})

	const handleCategoryInputChange = (name: any, newValue: any) =>
		setValue(name, newValue.value)

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={submit}>
				<label htmlFor="hashRate">
					Хешрейт
					<Input
						type="number"
						{...register('hashRate', {
							required: true,
						})}
						required
						min={0}
						placeholder="Введите хешрейт"
					/>
				</label>
				<label htmlFor="currenciesId">
					Монета
					<Controller
						control={control}
						name="currenciesId"
						render={({ field: { ref } }) => (
							<Select
								id="currenciesId"
								ref={ref}
								onChange={(value) =>
									handleCategoryInputChange('currenciesId', value)
								}
								options={currencies!.map((item) => ({
									value: item.id,
									label: item.name,
								}))}
								styles={SelectMyStyles}
								placeholder="Выберите монету"
								required
							/>
						)}
					/>
				</label>
				<Button appearance="green" hover="green">
					Показать
				</Button>
			</form>
			{!isLoad && (
				<div className={styles.chart} style={{ height: 500 }}>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							width={500}
							height={500}
							data={date}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="data" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="prediction" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</div>
			)}
			{isLoader && <LoaderSmall className={styles.loader} />}
		</div>
	)
}

export default AnalyticsScreen
