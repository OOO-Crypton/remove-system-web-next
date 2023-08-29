import cn from 'clsx'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button, Field, MaterialIcon, SubHeading } from '@/components/ui'

import { IChangePassword, UserService } from '@/services/user/user.service'

import styles from '../Account.module.scss'

const PasswordChange: FC<{ close: () => void; updateUser: () => void }> = ({
	close,
	updateUser,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IChangePassword>({
		mode: 'all',
	})

	const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
		const status = await UserService.changePassword(data)

		if (status === 200) {
			toast.success('Пароль успешно изменен')
			updateUser()
			close()
		}
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title="Смена пароля" />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn(styles.main, 'flex flex-col gap-3')}
			>
				<Field
					placeholder="Старый пароль"
					type="password"
					{...register('oldPassword', {
						required: 'Старый пароль обезательный!',
					})}
					error={errors.oldPassword}
				/>
				<Field
					placeholder="Новый пароль"
					type="password"
					{...register('newPassword', {
						required: 'Новый пароль обезательный!',
					})}
					error={errors.newPassword}
				/>
				<Button appearance="white" hover="green" type="submit">
					Сменить
				</Button>
			</form>
		</div>
	)
}

export default PasswordChange
