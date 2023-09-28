import { FC } from 'react'

export const SubHeading: FC<{ title: string; style?: object }> = ({
	title,
	style = {},
}) => {
	return (
		<h2 className="text-white text-xl mb-5 font-semibold" style={style}>
			{title}
		</h2>
	)
}
