import cn from 'clsx'
import { FC, useState } from 'react'

import { MaterialIcon, SubHeading, Toggle } from '@/components/ui'

import styles from './Modal.module.scss'

export const SettingAutoVideoCard: FC<{
	number: number
	auto: boolean
	close: () => void
}> = ({ number, auto = false, close }) => {
	const [isAuto, setIsAuto] = useState<boolean>(auto)

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading
					title={`Автоматическая настройки видеокарты №${number + 1}`}
				/>
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<div className={cn(styles.main, 'justify-center')}>
				<Toggle
					labelLeft="0"
					labelRight="1"
					toggled={isAuto}
					onClick={() => setIsAuto(!isAuto)}
				/>
			</div>
		</div>
	)
}
