import { StylesConfig } from 'react-select'

export const SelectMyStyles: StylesConfig = {
	option: (styles, { isSelected }) => {
		return {
			...styles,
			backgroundColor: isSelected ? '#09be8b' : '#fff',
			color: isSelected ? '#fff' : '#000',
			':hover': {
				backgroundColor: '#09be8b',
				color: '#fff',
			},
		}
	},
}

export const SelectMyStylesMinList: StylesConfig = {
	option: (styles, { isSelected }) => {
		return {
			...styles,
			backgroundColor: isSelected ? '#09be8b' : '#fff',
			color: isSelected ? '#fff' : '#000',
			':hover': {
				backgroundColor: '#09be8b',
				color: '#fff',
			},
		}
	},
	menuList: (styles) => {
		return {
			...styles,
			height: '100px !important',
			overflow: 'auto',
		}
	},
}
