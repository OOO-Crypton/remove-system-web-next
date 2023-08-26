import cn from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	(
		{ className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<input className={cn(className, styles.input)} ref={ref} {...props} />
		)
	}
)

Input.displayName = 'input'
