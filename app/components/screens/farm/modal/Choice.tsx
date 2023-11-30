import cn from 'clsx'
import { FC } from 'react'

import { Button, MaterialIcon, SubHeading } from '@/components/ui'

import { IFarmMonit } from '@/shared/types/farm.types'

import { ModalType } from '../FarmId'

import styles from './Modal.module.scss'

export const ChoiceSettingVideoCard: FC<{
	number: number
	open: (
		type: ModalType,
		{
			farm,
			video,
		}: {
			farm?: IFarmMonit
			video?: number
		}
	) => void
	close: () => void
}> = ({ number, open, close }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title={`Выберите настройки видеокарты №${number + 1}`} />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<div className={cn(styles.main, styles.choice)}>
				<Button
					appearance={'green'}
					hover={'green'}
					onClick={() => open('auto', {})}
				>
					Авто настройка
				</Button>
				<Button
					appearance={'green'}
					hover={'green'}
					onClick={() => open('setting', {})}
				>
					Ручная настройка
				</Button>
			</div>
		</div>
	)
}
