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

const arr = [{
    url: 'https://sun9-67.vkuserphoto.ru/impg/hcCNZVGnS0O3LldcvwyV5FzKuKLPW9U1_sJNuw/zZhzTbN1lF4.jpg?size=864x1080&quality=95&sign=c6ea6eb0b521ff19149ffd0200f19e33&type=album',
    arrRes: [{
        type: 'butt',
        conf: 0.88
    }],
    'mean': 0.88
}, {
    url: 'https://sun9-56.vkuserphoto.ru/impg/L9KVcRx8wKK019sphBayY05qf7477YOuFYm9og/4JgN0-PIms0.jpg?size=864x1080&quality=95&sign=d8e9c7ac2850488debe60c24c3e09138&type=album',
    arrRes: [{
        type: 'boobs',
        conf: 0.88
    }, {
        type: 'boobs',
        conf: 0.87
    }, {
        type: 'butt',
        conf: 0.33
    }, {
        type: 'butt',
        conf: 0.26
    }],
    'mean': 0.585
}, {
    url: 'https://sun9-47.vkuserphoto.ru/impg/T3b0CwSjIqld9Sc4Gn-cEgh-vci4e5JnxnCJqQ/4XevO9OHswQ.jpg?size=827x1080&quality=95&sign=cca5762c23b17e014f69681d495ad510&type=album',
    arrRes: [{
        type: 'boobs',
        conf: 0.73
    }, {
        type: 'boobs',
        conf: 0.62
    }],
    'mean': 0.675
}, {
    url: 'https://sun9-47.vkuserphoto.ru/impg/imHCWtKffYtNqb7ViyfE9JZEDPxtQD9E-EDLwQ/ubdl2b-4CZ8.jpg?size=607x1080&quality=95&sign=e2df9cd8f76bcd937895713a08ccd9b8&type=album',
    arrRes: [{
        type: 'butt',
        conf: 0.9
    }],
    'mean': 0.9
}, {
    url: 'https://sun9-31.vkuserphoto.ru/impg/W75cKji5QjaKjokFiwegpAAQczVe-CLYGTNyQw/ueXzqUBcNhQ.jpg?size=607x1080&quality=95&sign=db4488445efd4ab795605d3263139acd&type=album',
    arrRes: [{
        type: 'butt',
        conf: 0.91
    }],
    'mean': 0.91
}, {
    url: 'https://sun9-35.vkuserphoto.ru/impg/zEPm8NGzfJIB-hYt5pI9108fqsy-vV2SV3_1MA/YdV0LIFhqsw.jpg?size=607x1080&quality=95&sign=d91dce0e12a34f1367974c4e3913e0ec&type=album',
    arrRes: [{
        type: 'boobs',
        conf: 0.88
    }, {
        type: 'boobs',
        conf: 0.88
    }],
    'mean': 0.88
}, {
    url: 'https://sun9-28.vkuserphoto.ru/impg/fizAGIOUraZB9I5F1f2S--j2tNIRsVM_wjr52g/j-1ChGmYZJ0.jpg?size=669x1028&quality=95&sign=f272074a8d405f100be8a4696edb2ad4&type=album',
    arrRes: [{
        type: 'boobs',
        conf: 0.8
    }, {
        type: 'boobs',
        conf: 0.76
    }],
    'mean': 0.78
}, ]

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
