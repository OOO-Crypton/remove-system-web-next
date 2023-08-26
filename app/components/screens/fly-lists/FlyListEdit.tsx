import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { Select } from '@/components/ui/Select/Select'

import { IFlyLists } from '@/shared/types/flyList.type'

import styles from './FlyLists.module.scss'
import { FlyListsArr } from './data'

const FlyListEdit: FC<{ id: string }> = ({ id }) => {
	const flyList: IFlyLists = FlyListsArr.filter((item) => item.id === id)[0]

	const { register, handleSubmit } = useForm<IFlyLists>({
		mode: 'onBlur',
	})

	const submit = handleSubmit((value) => {
		console.log(value)
	})

	return (
		<div className={styles.flyList}>
			<h1>Изменение полетного листа №{flyList.id}</h1>
			<form onSubmit={submit}>
				<label htmlFor="name">
					Название
					<Input
						type="text"
						{...register('name', {
							required: true,
						})}
						required
						defaultValue={flyList.name}
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
						options={[
							{ label: 'coin 1', value: 1 },
							{ label: 'coin ', value: 0 },
						]}
						selected={{ label: flyList.coin.name, disabled: false }}
					/>
				</label>
				<label htmlFor="wallet">
					Кошелек
					<Select
						id="wallet"
						required
						{...register('wallet', {
							required: true,
						})}
						options={[{ label: 'wallet', value: 1 }]}
						selected={{ label: flyList.wallet.name, disabled: false }}
					/>
				</label>
				<label htmlFor="pull">
					Пулл
					<Select
						id="pull"
						required
						{...register('pull', {
							required: true,
						})}
						options={[{ label: 'pull', value: 1 }]}
						selected={{ label: flyList.pull.name, disabled: false }}
					/>
				</label>
				<label htmlFor="miner">
					Майнер
					<Select
						id="miner"
						required
						{...register('miner', {
							required: true,
						})}
						options={[{ label: 'miner', value: 1 }]}
						selected={{ label: flyList.miner.name, disabled: false }}
					/>
				</label>
				<Button appearance="white" hover="green">
					Создать
				</Button>
			</form>
		</div>
	)
}

export default FlyListEdit
