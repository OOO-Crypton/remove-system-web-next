import cn from 'clsx'
import { forwardRef } from 'react'

import { Input } from '../Input/Input'

import styles from './Field.module.scss'
import { IField } from './Field.type'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div
				className={cn(styles.common, styles.field, {
					[styles.error]: error,
				})}
				style={style}
			>
				<label>
					<span>{placeholder}</span>
					<Input placeholder={placeholder} ref={ref} type={type} {...rest} />
				</label>
				{error && <p>{error.message}</p>}
			</div>
		)
	}
)

Field.displayName = 'Field'
