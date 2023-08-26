import cn from 'clsx'
import { nanoid } from 'nanoid'
import { ForwardedRef, forwardRef } from 'react'

import styles from './Select.module.scss'
import { SelectProps } from './Select.props'

export const Select = forwardRef(
	(
		{ className, options, selected, ...props }: SelectProps,
		ref: ForwardedRef<HTMLSelectElement>
	): JSX.Element => {
		return (
			<select
				className={cn(className, styles.select)}
				ref={ref}
				{...props}
				defaultValue={'DEFAULT'}
			>
				<option
					value="DEFAULT"
					disabled={selected?.disabled !== undefined ? selected.disabled : true}
				>
					{selected.label}
				</option>
				{options.map((x) => (
					<option className={styles.option} key={nanoid()} value={x.value}>
						{x.label}
					</option>
				))}
			</select>
		)
	}
)

Select.displayName = 'select'
