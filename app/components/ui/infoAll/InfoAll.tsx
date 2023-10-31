import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IFarmMonit } from '@/shared/types/farm.types'

import {
	getEnergyAll,
	getGPUCountAll,
	getHashrateAll,
} from '@/utils/farms/getInfoById'

import SkeletonLoader from '../skeleton-loader/SkeletonLoader'

import styles from './InfoAll.module.scss'

const InfoAll = () => {
	const [headData, setHeadData] = useState<boolean>(false)
	const [farms, setFarms] = useState<IFarmMonit[]>([])

	const { token } = useAuth()
	const { pathname } = useRouter()

	useEffect(() => {
		const socket = new WebSocket(
			`ws://192.168.0.133/api/farms/stats?token=${token}`
		)
		socket.onmessage = (msg: any) => {
			if (msg.data === 'no farms') {
				setFarms([])
			} else {
				setFarms(JSON.parse(msg.data))
			}
		}

		return () => {
			if (socket?.readyState !== 3) socket.close()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
						<p className={styles.dataText}>
							{farms.length ? farms.length : 'N/A'}
						</p>
						<p className={styles.text}>
							<b>Workers</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>
							{farms.length ? getGPUCountAll(farms) : 'N/A'}
						</p>
						<p className={styles.text}>
							<b>GPU</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>
							{farms.length ? getEnergyAll(farms) : 'N/A'}
						</p>
						<p className={styles.text}>
							<b>Потребление</b>
						</p>
					</div>
					<div className={styles.div}>
						<p className={styles.dataText}>
							{farms.length ? getHashrateAll(farms) : 'N/A'}
						</p>
						<p className={styles.text}>
							<b>Хэшрейт</b>
						</p>
					</div>
				</>
			)}
		</div>
	) : (
		<></>
	)
}
export default InfoAll
