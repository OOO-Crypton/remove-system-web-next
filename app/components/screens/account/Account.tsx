import cn from 'clsx'
import { FC, useState } from 'react'

import { Button, Input } from '@/components/ui/'

import styles from './Account.module.scss'

const AccountScreen: FC = () => {
	const [isEdit, setIsEdit] = useState<boolean>(false)

	const saveInfoUser = () => {
		setIsEdit(!isEdit)
	}

	return (
		<div className={styles.user}>
			<div className={cn(styles.info, styles.block)}>
				<h2>Личная информация</h2>
				<label htmlFor="fio">
					ФИО
					<Input
						placeholder="test"
						name="fio"
						id="fio"
						type="text"
						disabled={!isEdit}
					/>
				</label>
				<label htmlFor="email">
					Почта
					<Input
						placeholder="test"
						name="email"
						id="email"
						type="email"
						disabled={!isEdit}
					/>
				</label>
				<label htmlFor="phone">
					Телефон
					<Input
						placeholder="test"
						name="phone"
						id="phone"
						type="text"
						disabled={!isEdit}
					/>
				</label>
				<div className={styles.btnBlock}>
					<Button
						appearance="white"
						hover={!isEdit ? 'green' : 'red'}
						onClick={() => setIsEdit(!isEdit)}
					>
						{!isEdit ? 'Редактировать' : 'Отменить'}
					</Button>
					{isEdit && (
						<Button appearance="white" hover="green" onClick={saveInfoUser}>
							Сохранить
						</Button>
					)}
				</div>
			</div>
			{/* <div className={cn(styles.options, styles.block)}>
        <h2>Параметры системы</h2>
      </div> */}
		</div>
	)
}

export default AccountScreen
