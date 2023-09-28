import { FC } from 'react'

export const Heading: FC<{
	title: string
	className?: string
	style?: object
}> = ({ title, className = '', style = {} }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className.includes('xl') ? '' : 'text-2xl'
			} ${className}`}
			style={style}
		>
			{title}
		</h1>
	)
}
