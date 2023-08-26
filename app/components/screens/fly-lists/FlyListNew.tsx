import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { Select } from '@/components/ui/Select/Select'
import SubHeading from '@/components/ui/heading/SubHeading'

import styles from './FlyLists.module.scss'

interface IFormFlyList {
	name: string
	coin: string
	wallet: string
	pull: string
	miner: string
}

const FlyListNew = () => {
	const { register, handleSubmit } = useForm<IFormFlyList>({
		mode: 'onBlur',
	})

	const submit = handleSubmit((value) => {
		console.log(value)
	})

	return (
		<div className={styles.flyList}>
			<SubHeading title="Создание нового полетного листа" />
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
						options={[
							{ label: 'coin 1', value: 1 },
							{ label: 'coin ', value: 2 },
						]}
						selected={{ label: 'Выберите монету' }}
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
						selected={{ label: 'Выберите кашелек' }}
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
						selected={{ label: 'Выберите пулл' }}
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
						selected={{ label: 'Выберите майнер' }}
					/>
				</label>
				<Button appearance="white" hover="green">
					Создать
				</Button>
			</form>
		</div>
	)
}

export default FlyListNew
