import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Button, Heading, SubHeading } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta'

import styles from './Farm.module.scss'

export const FarmScreen: FC = () => {
	const [farms, setFarms] = useState([])
	const router = useRouter()
	const { token } = useAuth()

	useEffect(() => {
		const socket = new WebSocket(
			`ws://37.230.112.158:8080/api/farms/stats?token=${token}`
		)
		socket.onmessage = (msg: any) => {
			console.log(msg.data)
			if (msg.data === 'no farms') {
				setFarms([])
			} else {
				setFarms(msg)
			}
		}

		return () => {
			if (socket?.readyState !== 3) socket.close()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Meta title="Home">
			<div className={styles.farms}>
				<Heading title="Мои фермы" />
				{farms.length ? (
					farms.map((farm, idx) => (
						<div
							className={styles.item}
							key={nanoid()}
							// onClick={() => router.push(`/farms/${farm.id}`)}
						>
							<p>Ферма №{idx + 1}</p>
							{/* <div className={styles.info}>
							<p>Кол-во GPU: {farm.systemInfo}</p>
							<p>Потребление: {farm.systemInfo}</p>
							<p>Хешрейт: {farm.systemInfo}</p>
							<p>CPU: {farm.systemInfo}</p>
						</div> */}
							{/* <p>{farm.type}</p> */}
						</div>
					))
				) : (
					<div className={styles.noItems}>
						<SubHeading title="Нет ферм" />
					</div>
				)}
				<Button
					appearance="white"
					hover="green"
					style={{ margin: '1rem auto 0.5rem auto', display: 'block' }}
					onClick={() => router.push('/farms/new')}
				>
					Добавить новую ферму
				</Button>
			</div>
		</Meta>
	)
}

export default FarmScreen
