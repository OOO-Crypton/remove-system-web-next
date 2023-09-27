import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{
	name: TypeMaterialIconName
	size?: number
	className?: string
	fill?: string
	onClick?: () => void
}> = ({ name, size, className, fill, onClick }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	if (isRenderClient)
		return (
			(
				<IconComponent
					size={size}
					className={className}
					onClick={onClick}
					fill={fill}
				/>
			) || <MaterialIcons.MdDragIndicator />
		)
	else return null
}
