import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ISelectField {
	id: string
	placeholder: string
	control: Control<any>
	rules?:
		| Omit<
				RegisterOptions<any, string>,
				'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
		  >
		| undefined
	options?: ISelect[]
	error?: FieldError | any
	isMulti?: boolean
	required?: boolean
	disabled?: boolean
	isOptionDisabled?: number
}

export interface ISelect {
	label: string
	value: string | number
}
