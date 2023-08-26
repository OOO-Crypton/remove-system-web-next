import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { Select } from '@/components/ui/Select/Select'

import { IWallet } from '@/shared/types/wallet.type'

import styles from './Wallets.module.scss'

const WalletNew: FC = () => {
	const { register, handleSubmit } = useForm<IWallet>({
		mode: 'onBlur',
	})

	const submit = handleSubmit((value) => {
		console.log(value)
	})

	return (
		<div className={styles.editWallet}>
			<h1>Создание нового кошелька</h1>
			<form onSubmit={submit}>
				<label htmlFor="name">
					Название
					<Input
						type="text"
						{...register('name', {
							required: true,
						})}
						required
						placeholder="Введите назавние"
					/>
				</label>
				<label htmlFor="coin">
					Монета
					<Select
						id="coin"
						required
						{...register('coin', {
							required: true,
						})}
						options={[{ label: 'coin', value: 1 }]}
						selected={{ label: 'Выберите монету' }}
					/>
				</label>
				<label htmlFor="address">
					Адрес кошелька
					<Input
						type="text"
						{...register('address', {
							required: true,
						})}
						required
						placeholder="Введите адрес кошелька"
					/>
				</label>
				<Button appearance="white" hover="green">
					Создать
				</Button>
			</form>
		</div>
	)
}

export default WalletNew
