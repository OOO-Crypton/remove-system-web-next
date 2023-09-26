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

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
]

const dataBody = [
	{
		data: new Date().toDateString(),
		value: -5048236290000000,
	},
	{
		data: new Date().toDateString(),
		value: -3577969630000000,
	},
	{
		data: new Date().toDateString(),
		value: -5678466170000000,
	},
	{
		data: new Date().toDateString(),
		value: 42641460900000000,
	},
	{
		data: new Date().toDateString(),
		value: 42837975100000000,
	},
	{
		data: new Date().toDateString(),
		value: 42670883800000000,
	},
	{
		data: new Date().toDateString(),
		value: 42671240900000000,
	},
]

const AnalyticsScreen: FC = () => {
	const [currencies, setCurrencies] = useState<ICurrency[]>([])
	const [date, setData] = useState<any[]>(dataBody)
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
					prediction: item.prediction,
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
					Название
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
					Кошелек
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
