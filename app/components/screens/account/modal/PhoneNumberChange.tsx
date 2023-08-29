import cn from 'clsx'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button, Field, MaterialIcon, SubHeading } from '@/components/ui'

import { IChangePhoneNumber, UserService } from '@/services/user/user.service'

import styles from '../Account.module.scss'

const PhoneNumberChange: FC<{ close: () => void; updateUser: () => void }> = ({
	close,
	updateUser,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IChangePhoneNumber>({
		mode: 'all',
	})

	const onSubmit: SubmitHandler<IChangePhoneNumber> = async (data) => {
		const status = await UserService.changePhoneNumber(data)

		if (status === 200) {
			toast.success('Номер телефона успешно изменен')
			updateUser()
			close()
		}
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title="Смена номера телефона" />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn(styles.main, 'flex flex-col gap-3')}
			>
				<Field
					placeholder="Новая почта"
					{...register('phoneNumber', {
						required: 'Новая почта обезательная!',
					})}
					error={errors.phoneNumber}
				/>
				<Field
					placeholder="Пароль"
					type="password"
					{...register('password', {
						required: 'Пароль обезательный!',
					})}
					error={errors.password}
				/>
				<Button appearance="white" hover="green" type="submit">
					Сменить
				</Button>
			</form>
		</div>
	)
}

export default PhoneNumberChange
