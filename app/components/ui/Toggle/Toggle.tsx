import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './Toggle.module.scss'

interface iToggle {
	labelLeft?: string
	labelRight?: string
	toggled: boolean
	onClick: (isToggled: boolean) => void
	className?: string
}

export const Toggle: FC<iToggle> = ({
	labelLeft,
	labelRight,
	toggled,
	onClick,
	className,
}): JSX.Element => {
	const [isToggled, toggle] = useState(toggled)

	const callback = () => {
		toggle(!isToggled)
		onClick(!isToggled)
	}

	return (
		<div className={cn(styles.toggle, className)}>
			<label className={cn(styles.label)}>
				<strong className={styles.strongL}>{labelLeft}</strong>
				<input
					className={styles.input}
					type="checkbox"
					defaultChecked={isToggled}
					onClick={callback}
				/>
				<span className={styles.span} />
				<strong className={styles.strongR}>{labelRight}</strong>
			</label>
		</div>
	)
}
