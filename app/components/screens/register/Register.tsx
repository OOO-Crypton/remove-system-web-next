import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Field, Heading } from '@/components/ui'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta'

import { IRegister } from '@/store/user/user.interface'

import styles from './Register.module.scss'

const RegisterScreen: FC = () => {
	const { isLoading } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>({
		mode: 'all',
	})

	const { reg } = useActions()

	const onSubmit: SubmitHandler<IRegister> = async (data) => {
		reg(data)
	}

	return (
		<Meta title="Регистрация" description="Регистрация">
			<form onSubmit={handleSubmit(onSubmit)} className={styles.register}>
				<Heading title="Регистрация" />
				<Field
					{...register('email', {
						required: 'Почта обезательная!',
					})}
					type="email"
					placeholder="Почта"
					error={errors.email}
					disabled={isLoading}
				/>
				<Field
					{...register('userName', {
						required: 'Имя обезательная!',
					})}
					placeholder="Имя"
					error={errors.userName}
					disabled={isLoading}
				/>
				<Field
					{...register('phone', {
						required: 'Номер телефона обезательный!',
					})}
					placeholder="Номер телефона"
					error={errors.phone}
					disabled={isLoading}
				/>
				<Field
					{...register('password', {
						required: 'Пароль обезательный!',
					})}
					type="password"
					placeholder="Пароль"
					error={errors.password}
					disabled={isLoading}
				/>
				<Button appearance="green" hover={'green'}>
					Зарегистрироваться
				</Button>
			</form>
		</Meta>
	)
}

export default RegisterScreen
