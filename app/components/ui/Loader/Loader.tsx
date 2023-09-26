import cn from 'clsx'
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps
	extends DetailedHTMLProps<
		HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}
export const Loader = ({ className, ...props }: LoaderProps): JSX.Element => {
	return (
		<div className={cn(styles.ldsRing, className)}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export const LoaderSmall = ({
	className,
	...props
}: LoaderProps): JSX.Element => {
	return (
		<div className={cn(styles.ldsRingSmall, className)}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
