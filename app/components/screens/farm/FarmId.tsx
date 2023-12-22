import { nanoid } from '@reduxjs/toolkit'
import { count } from 'console'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Button, Heading, SubHeading } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import { IFarm, IFarmMonit } from '@/shared/types/farm.types'

import { FarmsService } from '@/services/index'

import { modalStyle } from '@/configs/style-modal'

import styles from './FarmId.module.scss'
import {
	ChoiceSettingVideoCard,
	ModalStartFlyList,
	SettingAutoVideoCard,
	SettingVideoCard,
} from './modal'

export type ModalType = 'start' | 'choice' | 'auto' | 'setting'

const FarmIdScreen: FC<{ id: number }> = ({ id }) => {
	const { push } = useRouter()
	const [farm, setFarm] = useState<IFarmMonit>()
	const [modalIsOpen, setIsOpen] = useState<boolean>(false)
	const [farmInfo, setFarmInfo] = useState<IFarm>()
	const [farmProp, setFarmProp] = useState<IFarmMonit>()
	const [modalType, setModalType] = useState<ModalType>()
	const [currentVideo, setCurrentVideo] = useState<number>(0)

	function openModal(
		type: ModalType,
		{
			farm,
			video,
		}: {
			farm?: IFarmMonit
			video?: number
		}
	) {
		setModalType(type)
		farm && setFarmProp(farm)
		video && setCurrentVideo(video)
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	const { token } = useAuth()

	useEffect(() => {
		const socket = new WebSocket(
			`ws://192.168.0.133/api/farms/stats?token=${token}`
		)
		socket.onmessage = (msg: any) => {
			if (msg.data === 'no farms') {
				setFarm(undefined)
			} else {
				setFarm(
					JSON.parse(msg.data).find(
						(item: IFarmMonit) => item.Farm === Number(id)
					)
				)
			}
		}

		const fetch = async () => {
			const farmInfo = await FarmsService.getById(id)

			setFarmInfo(farmInfo)
		}
		fetch()

		return () => {
			if (socket?.readyState !== 3) socket.close()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const Component = () => {
		switch (modalType) {
			case 'start':
				return (
					<ModalStartFlyList
						farmId={farmProp?.Farm ? farmProp?.Farm : 0}
						close={closeModal}
					/>
				)
			case 'choice':
				return (
					<ChoiceSettingVideoCard
						number={currentVideo}
						open={openModal}
						close={closeModal}
					/>
				)
			case 'setting':
				return <SettingVideoCard number={currentVideo} close={closeModal} />
			case 'auto':
				return (
					<SettingAutoVideoCard
						number={currentVideo}
						auto={false}
						close={closeModal}
					/>
				)
			default:
				return <></>
		}
	}

	return (
		<div className={styles.mainWrapper}>
			<>
				<Heading title={`Ферма №${id}`} />
				<div className={styles.infoWrapper}>
					<div className={styles.farmSysInfo}>
						<SubHeading title="Информация о системе" />
						<div className={styles.sysInfoDesc}>
							<p>
								Материнская плата:{' '}
								<span>
									{farmInfo?.systemInfo
										? `${farmInfo?.systemInfo?.motherboard}`
										: '-'}
								</span>
							</p>
							<p>
								CPU:{' '}
								<span>
									{farmInfo?.systemInfo ? farmInfo?.systemInfo?.cpu : '-'}
								</span>
							</p>
							<p>
								Версия ОС:{' '}
								<span>
									{farmInfo?.systemInfo?.osVersion
										? farmInfo?.systemInfo?.osVersion
										: '-'}
								</span>
							</p>
							<p>
								IP-адрес:{' '}
								<span>
									{farmInfo?.localSystemAddress
										? farmInfo?.localSystemAddress
										: '-'}
								</span>
							</p>
							<p>
								Полетный лист:{' '}
								<span>
									{farmInfo?.activeFlightSheet
										? farmInfo?.activeFlightSheet.name
										: '-'}
								</span>
							</p>
							<p>
								Выделяемая тепловая энергия: <span>-</span>
							</p>
						</div>
					</div>
					{farm ? (
						<div className={styles.btnsReboot}>
							{farm?.ActiveFlightSheetId === 0 ? (
								<Button
									appearance="white"
									hover="green"
									style={{ width: 200 }}
									onClick={() =>
										openModal('start', {
											farm: farm,
										})
									}
								>
									Установить активный полетный лист
								</Button>
							) : null}
							<Button
								appearance="white"
								hover="green"
								onClick={() => FarmsService.restartFarm(id)}
							>
								Перезагрузить
							</Button>
							{farm?.Stat ? (
								<Button
									appearance="white"
									hover="red"
									onClick={() => FarmsService.stopFarm(id)}
								>
									Остановить
								</Button>
							) : (
								<Button
									appearance="white"
									hover="green"
									onClick={() => FarmsService.startFarm(id)}
								>
									Запустить
								</Button>
							)}
							<Button
								appearance="white"
								hover="red"
								onClick={() => {
									FarmsService.deleteFarm(id)
									push('/farms')
								}}
							>
								Удалить ферму
							</Button>
						</div>
					) : null}
				</div>
				{farm?.Stat ? (
					<div className={styles.gpuTableWrapper}>
						<table className={styles.gpuTable}>
							<thead style={{ position: 'relative', zIndex: 0 }}>
								<tr>
									<th>Название</th>
									<th>Хэшрейт</th>
									<th>Температура</th>
									<th>Потребление</th>
									<th>Кулер</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{farm?.Stat?.map((item, idx) => (
									<tr key={nanoid()}>
										<td>
											<p>{item.FullName.split(',')[0]}</p>
										</td>
										<td>{item.MonitoringView.CurrentHashrate} Mh/s</td>
										<td>{item.MonitoringView.GPUTemperature} C</td>
										<td>{item.MonitoringView.EnergyConsumption} W</td>
										<td>{item.MonitoringView.FanRPM} %</td>
										<td>
											<Image
												src="/img/svg/gear-white.svg"
												alt="gear icon"
												width={35}
												height={35}
												draggable={false}
												unoptimized={true}
												onClick={() =>
													openModal('choice', {
														video: idx,
													})
												}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : null}
			</>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				style={modalStyle}
			>
				<Component />
			</Modal>
		</div>
	)
}

export default FarmIdScreen
