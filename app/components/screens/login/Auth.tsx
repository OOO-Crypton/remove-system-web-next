import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Field, Heading } from '@/components/ui'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta'

import { ILogin } from '@/store/user/user.interface'

import styles from './Auth.module.scss'
import { useAuthRedirect } from './useAuthRedirect'

const AuthScreen: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		mode: 'onChange',
	})

	const { login } = useActions()

	const onSubmit: SubmitHandler<ILogin> = async (data) => {
		login(data)
	}

	return (
		<Meta title="Авторизация">
			<form onSubmit={handleSubmit(onSubmit)} className={styles.auth}>
				<Heading title="Авторизация" />
				<Field
					{...register('email', {
						required: 'Логин обязательный!',
					})}
					placeholder="Почта"
					error={errors.email}
					disabled={isLoading}
				/>
				<Field
					{...register('password', {
						required: 'Пароль обязательный!',
					})}
					type="password"
					placeholder="Пароль"
					error={errors.password}
					disabled={isLoading}
				/>
				<Button appearance="green" hover={'green'}>
					Войти
				</Button>
			</form>
		</Meta>
	)
}

export default AuthScreen
