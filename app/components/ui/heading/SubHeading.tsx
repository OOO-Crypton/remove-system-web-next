import { FC } from 'react'

export const SubHeading: FC<{
	title: string
	style?: object
	className?: string
}> = ({ title, style = {}, className = '' }) => {
	return (
		<h2
			className={`text-white text-xl mb-5 font-semibold ${className}`}
			style={style}
		>
			{title}
		</h2>
	)
}
