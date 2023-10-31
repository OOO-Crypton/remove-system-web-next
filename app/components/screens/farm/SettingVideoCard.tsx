import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Field, Input, MaterialIcon, SubHeading } from '@/components/ui'

import styles from './../fly-lists/FlyLists.module.scss'

interface ISettingVideoCard {
	core: number
	memory: number
	speed: number
	consumption: number
}

const SettingVideoCard: FC<{ close: () => void }> = ({ close }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISettingVideoCard>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<ISettingVideoCard> = async (data) => {
		console.log(data)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title="Настройки видеокарты №1" />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
				<Field
					{...register('core', {
						required: 'Частота ядра обязательная!',
					})}
					type="number"
					placeholder="Частота ядра (Ггц)"
					error={errors.core}
				/>
				<Field
					{...register('memory', {
						required: 'Частота памяти обязательная!',
					})}
					type="number"
					placeholder="Частота памяти (Ггц)"
					error={errors.memory}
				/>
				<Field
					{...register('speed', {
						required: 'Скорость кулера обязательная!',
						min: {
							value: 1,
							message: 'Минимальное значение 1%',
						},
						max: {
							value: 100,
							message: 'Максимальное значение 100%',
						},
					})}
					type="number"
					placeholder="Скорость кулера (%)"
					error={errors.speed}
				/>
				<Field
					{...register('consumption', {
						required: 'Потребление обязательная!',
					})}
					type="number"
					placeholder="Потребление (W)"
					error={errors.consumption}
				/>
				<Button
					appearance="white"
					hover="green"
					type="submit"
					style={{ marginTop: 15 }}
				>
					Применить
				</Button>
			</form>
		</div>
	)
}

export default SettingVideoCard
