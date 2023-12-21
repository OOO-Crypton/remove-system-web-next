import { nanoid } from '@reduxjs/toolkit'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFarmsContext } from 'providers/FarmsProvider/FarmProvider'
import { FC, useEffect, useState } from 'react'

import { Button, Heading, SubHeading } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import { IFarm, IFarmMonit } from '@/shared/types/farm.types'

import { FarmsService } from '@/services/index'

import {
	getEnergyById,
	getGPUCountById,
	getHashrateById,
} from '@/utils/farms/getInfoById'
import { Meta } from '@/utils/meta'

import styles from './Farm.module.scss'

export const FarmScreen: FC = () => {
	const router = useRouter()
	const [farms, setFarms] = useState<IFarmMonit[]>([])
	const [farmAll, setFarmAll] = useState<IFarm[]>([])
	const { token } = useAuth()

	const { farmsArr } = useFarmsContext()

	useEffect(() => {
		console.log(farmsArr, 'context')

		const socket = new WebSocket(
			`ws://192.168.0.133/api/farms/stats?token=${token}`
		)
		socket.onmessage = async (msg: any) => {
			if (msg.data === 'no farms') {
				setFarms([])
			} else {
				setFarms(JSON.parse(msg.data))
			}

			const farmsAll = await FarmsService.all()

			setFarmAll(
				farmsAll.filter((service) =>
					JSON.parse(msg.data).every(
						(item: IFarmMonit) => item.Farm !== service.id
					)
				)
			)
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
				<div className={styles.info}>
					<SubHeading title="Полезная информация" />
					<Link href="/info-razgon">Формирование рекомендаций по разгону</Link>
					<Link href="/info-thermal-energy">
						Формирование рекомендаций по альтернативному использованию
						выделяемой тепловой энергии
					</Link>
				</div>
				{farms.length ? (
					<div>
						<SubHeading
							title="Активные фермы"
							style={{ color: 'var(--green)' }}
						/>
						{farms.map((farm) => (
							<div
								className={styles.item}
								key={nanoid()}
								onClick={() => router.push(`/farms/${farm.Farm}`)}
							>
								<p>Ферма №{farm.Farm}</p>
								<div className={styles.info}>
									<p>Кол-во GPU: {getGPUCountById(farms, farm.Farm)}</p>
									<p>Потребление: {getEnergyById(farms, farm.Farm)}</p>
									<p>Хешрейт: {getHashrateById(farms, farm.Farm)}</p>
								</div>
							</div>
						))}
					</div>
				) : null}
				{farmAll.length ? (
					<div>
						<SubHeading
							title="Неактивные фермы"
							style={{ color: 'var(--red)' }}
						/>
						<>
							{farmAll.map((item) => (
								<div
									className={styles.item}
									key={nanoid()}
									onClick={() => router.push(`/farms/${item.id}`)}
								>
									<p>Ферма №{item.id}</p>
								</div>
							))}
						</>
					</div>
				) : (
					<div></div>
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
