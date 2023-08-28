import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Button } from '@/components/ui'

import { Meta } from '@/utils/meta'

import styles from './Farm.module.scss'
import { HomeData } from './data'

const FarmScreen: FC = () => {
	const rouster = useRouter()

	return (
		<Meta title="Home">
			<div className={styles.farms}>
				<h1>Мои фермы</h1>
				{HomeData.map((farm, idx) => (
					<div
						className={styles.item}
						key={nanoid()}
						onClick={() => rouster.push(`/farms/${farm.id}`)}
					>
						<p>Ферма №{idx + 1}</p>
						<div className={styles.info}>
							<p>Кол-во GPU: {farm.gpus.length}</p>
							<p>Потребление: {farm.consumptionAll}</p>
							<p>Хешрейт: {farm.hashrateAll}</p>
							<p>CPU: {farm.cpu}</p>
						</div>
						<p>{farm.type}</p>
					</div>
				))}
				<Button
					appearance="white"
					hover="green"
					style={{ margin: '1rem auto 0.5rem auto', display: 'block' }}
					onClick={() => rouster.push('/farms/new')}
				>
					Добавить новую ферму
				</Button>
			</div>
		</Meta>
	)
}

export default FarmScreen
