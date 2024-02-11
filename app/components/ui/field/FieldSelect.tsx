import cn from 'clsx'
import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

import { SelectMyStyles } from '@/configs/stylesSelect.config'

import styles from './Field.module.scss'
import { ISelectField } from './Field.type'

export const FieldSelect: FC<ISelectField> = memo(
	({
		id,
		placeholder,
		control,
		rules,
		options,
		error,
		isMulti = false,
		required = false,
		isOptionDisabled = 10,
		disabled,
	}) => {
		return (
			<div
				className={cn(styles.common, styles.select, {
					[styles.error]: error,
				})}
			>
				<label htmlFor={id} className={styles.select}>
					<span
						className={cn({
							[styles.required]: required,
						})}
					>
						{placeholder}
					</span>
					<Controller
						control={control}
						name={id}
						rules={rules}
						render={({ field: { ref, onChange, value } }) => (
							<Select
								placeholder={placeholder}
								instanceId={id}
								inputId={id}
								ref={ref}
								onChange={onChange}
								defaultValue={value}
								options={options ? options : value}
								noOptionsMessage={() => 'Данных нет'}
								isOptionDisabled={() => value?.length >= isOptionDisabled}
								styles={SelectMyStyles}
								isMulti={isMulti}
								required={required}
								isDisabled={disabled}
							/>
						)}
					/>
				</label>
				{error && (
					<p>
						<>{error.message}</>
					</p>
				)}
			</div>
		)
	}
)

FieldSelect.displayName = 'Select'
