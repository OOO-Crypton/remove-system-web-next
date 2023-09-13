import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import SkeletonLoader from '../skeleton-loader/SkeletonLoader'

import styles from './InfoAll.module.scss'

const InfoAll = () => {
	const [headData, setHeadData] = useState<boolean>(false)

	const { token } = useAuth()
	const { pathname } = useRouter()

	if (pathname === '/') {
		return null
	}

	return token ? (
		<div className={styles.dataDiv}>
			{headData ? (
				<>
					<div className={styles.div}>
						<SkeletonLoader count={1} className="h-12" />
					</div>
					<div className={styles.div}>
						<SkeletonLoader count={1} className="h-12" />
					</div>
					<div className={styles.div}>
						<SkeletonLoader count={1} className="h-12" />
					</div>
					<div className={styles.div}>
						<SkeletonLoader count={1} className="h-12" />
					</div>
				</>
			) : (
				<>
					<div className={styles.div}>
						<p className={styles.dataText}>N/A</p>
						<p className={styles.text}>
							<b>Workers</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>N/A</p>
						<p className={styles.text}>
							<b>GPU</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>N/A</p>
						<p className={styles.text}>
							<b>Потребление</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>N/A</p>
						<p className={styles.text}>
							<b>Хэшрейт</b>
						</p>
					</div>
				</>
			)}
		</div>
	) : null
}
export default InfoAll
