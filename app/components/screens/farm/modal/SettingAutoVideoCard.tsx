import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	Button,
	Field,
	FieldSelect,
	MaterialIcon,
	SubHeading,
} from '@/components/ui'

import { ISelect } from '@/ui/field/Field.type'

import { WalletsService } from '@/services/index'

import styles from './Modal.module.scss'

interface IForm {
	coinId: ISelect
	setting: number
}

export const SettingAutoVideoCard: FC<{
	number: number
	close: () => void
}> = ({ number, close }) => {
	const [currency, setCurrency] = useState<ISelect[]>([])

	useEffect(() => {
		const getCurrencies = async () => {
			const res = await WalletsService.getCurrenciesList()
			setCurrency(res.map((item) => ({ label: item.name, value: item.id })))
		}
		getCurrencies()
	}, [])

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		mode: 'onChange',
		defaultValues: {
			coinId: {
				label: 'EthereumClassic',
				value: '86',
			},
		},
	})

	const onSubmit: SubmitHandler<IForm> = async (data) => {
		console.log(data)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title={`Автоматическая настройки видеокарты №${number}`} />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<div>
				<div className="my-3">
					<h3>Текущие настройки</h3>
					<p>
						Частота ядра — <span>1300</span>
					</p>
					<p>
						Частота памяти — <span>2300</span>
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<FieldSelect
						id="coinId"
						control={control}
						placeholder="Монета"
						options={currency}
						error={errors.coinId}
						required
					/>
					<div className="flex flex-col gap-1 items-start">
						<label className="flex flex-row-reverse gap-2">
							1400,1600
							<input type="radio" name="setting" value="1" />
						</label>
						<label className="flex flex-row-reverse gap-2">
							1300,2300
							<input type="radio" name="setting" value="2" />
						</label>
						<label className="flex flex-row-reverse gap-2">
							-300,2300
							<input type="radio" name="setting" value="3" />
						</label>
					</div>
					<Button appearance="white" hover="green">
						Сохранить
					</Button>
				</form>
			</div>
		</div>
	)
}
