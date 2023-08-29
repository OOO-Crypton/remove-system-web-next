import { useRouter } from 'next/router'
import { useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import SkeletonLoader from '../skeleton-loader/SkeletonLoader'

import styles from './InfoAll.module.scss'

interface HeadDataInterface {
	workers: number
	gpu: number
	w: number
	coin: number
}

const InfoAll = () => {
	const [headData, setHeadData] = useState<HeadDataInterface | null>(null)

	const { token } = useAuth()
	const { pathname } = useRouter()

	if (pathname === '/') {
		return null
	}

	return token ? (
		<div className={styles.dataDiv}>
			{headData === null ? (
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
						{/* <p className={styles.dataText}>{headData?.workers ?? 0}</p> */}
						<p className={styles.text}>
							<b>Workers</b>
						</p>
					</div>
					<div className={styles.div}>
						{/* <p className={styles.dataText}>{headData?.gpu ?? 0}</p> */}
						<p className={styles.text}>
							<b>GPU</b>
						</p>
					</div>
					<div className={styles.div}>
						{/* <p className={styles.dataText}>{(headData?.w ?? 0) + ' W'}</p> */}
						<p className={styles.text}>
							<b>Потребление</b>
						</p>
					</div>
					<div className={styles.div}>
						{/* <p className={styles.dataText}>{(headData?.coin ?? 0) + ' Mh/s'}</p> */}
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
