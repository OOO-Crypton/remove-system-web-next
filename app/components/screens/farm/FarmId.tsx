import { nanoid } from '@reduxjs/toolkit'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/ui/Button/Button'

import { IFarm } from '@/shared/types/farm.types'

import { HomeData } from '../home/data'

import styles from './FarmId.module.scss'

const FarmId: FC<{ id: string }> = ({ id }) => {
	const farm: IFarm = HomeData.filter((item) => item.id === id)[0]

	return (
		<div className={styles.mainWrapper}>
			<h1>Ферма {farm.id}</h1>
			<div className={styles.infoWrapper}>
				<div className={styles.farmSysInfo}>
					<h2>Информация о системе</h2>
					<div className={styles.sysInfoDesc}>
						<p>
							Материнская плата: <span>{farm.motherboard}</span>
						</p>
						<p>
							CPU: <span>{farm.cpu}</span>
						</p>
						<p>
							Версия ОС: <span>{farm.version}</span>
						</p>
						<p>
							IP-адрес: <span>{farm.ipAddress}</span>
						</p>
					</div>
				</div>
				<div className={styles.btnsReboot}>
					<Button appearance="white" hover="green">
						Перезагрузить
					</Button>
					<Button appearance="white" hover="green">
						Перезапустить майнер
					</Button>
					<Button appearance="white" hover="red">
						Выключить
					</Button>
				</div>
			</div>
			<div className={styles.gpuTableWrapper}>
				<table className={styles.gpuTable}>
					<thead>
						<tr>
							<th></th>
							<th>Хэшрейт</th>
							<th>Температура</th>
							<th>Потребление</th>
							<th>Кулер</th>
							<th>Ядро</th>
							<th>Память</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{farm.gpus.map((item, idx) => (
							<tr key={nanoid()}>
								<td>
									<h4>GPU {item.id}</h4>
									<p>{item.name}</p>
								</td>
								<td>{item.hashrate} Mh/s</td>
								<td>{item.temperature} C</td>
								<td>{item.powerConsumption} W</td>
								<td>{item.fanSpeed} %</td>
								<td>{item.core}</td>
								<td>{item.memory}</td>
								<td>
									<Image
										src="/img/svg/gear-white.svg"
										alt="gear icon"
										width={35}
										height={35}
										draggable={false}
										unoptimized={true}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default FarmId
