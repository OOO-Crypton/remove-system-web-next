import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { Select } from '@/components/ui/Select/Select'

import { IWallet } from '@/shared/types/wallet.type'

import styles from './Wallets.module.scss'
import { WalletsArr } from './data'

const WalletEdit: FC<{ id: string }> = ({ id }) => {
	const editWallet: IWallet = WalletsArr.filter((item) => item.id === id)[0]

	const { register, handleSubmit } = useForm<IWallet>({
		mode: 'onBlur',
	})

	const submit = handleSubmit((value) => {
		console.log(value)
	})

	return (
		<div className={styles.editWallet}>
			<h1>Редактирование кошелка №{editWallet.id}</h1>
			<form onSubmit={submit}>
				<label htmlFor="name">
					Название
					<Input
						type="text"
						{...register('name', {
							required: true,
						})}
						required
						defaultValue={editWallet.name}
						placeholder="Введите назавние"
					/>
				</label>
				<label htmlFor="coin">
					Кошелек
					<Select
						id="coin"
						required
						{...register('coin', {
							required: true,
						})}
						options={[{ label: 'coin', value: 1 }]}
						selected={{ label: editWallet.coin.name, disabled: false }}
					/>
				</label>
				<label htmlFor="address">
					Название
					<Input
						type="text"
						{...register('address', {
							required: true,
						})}
						required
						defaultValue={editWallet.address}
						placeholder="Введите назавние"
					/>
				</label>
				<Button appearance="white" hover="green">
					Изменить
				</Button>
			</form>
		</div>
	)
}

export default WalletEdit
