import cn from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#171e2d"
			highlightColor="#3c3d43"
			className={cn('rounded-lg', className)}
			style={{ zIndex: 0 }}
		/>
	)
}

export default SkeletonLoader
