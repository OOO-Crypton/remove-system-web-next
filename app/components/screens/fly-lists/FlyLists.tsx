import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import Modal from 'react-modal'
import { toast } from 'react-toastify'

import {
	Button,
	Heading,
	Loader,
	MaterialIcon,
	SubHeading,
} from '@/components/ui'

import { IFlyLists } from '@/shared/types/flyList.type'

import { FlightSheetsService } from '@/services/index'

import { modalStyle } from '@/configs/style-modal'

import styles from './FlyLists.module.scss'
import ModalStartFlyList from './ModalStartFlyList'

const FlyListScreen: FC = () => {
	const [flyList, setFlyList] = useState<IFlyLists[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)
	const [modalIsOpen, setIsOpen] = useState<boolean>(false)
	const [modalFlyId, setModalFlyId] = useState<number>(0)

	function openModal(id: number) {
		setModalFlyId(id)
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const flyList = await FlightSheetsService.getAll()

			console.log(flyList)

			setFlyList(flyList)
			setIsLoad(false)
		}

		getData()
	}, [])

	const deleteById = (id: number) => async () => {
		const { status } = await FlightSheetsService.deleteById(id)

		if (status === 200) {
			const flyList = await FlightSheetsService.getAll()

			setFlyList(flyList)
			toast.success('Полетный лист успешно удален')
		}
	}

	return (
		<>
			<div className={styles.flyLists}>
				{isLoad ? (
					<Loader />
				) : (
					<>
						<Heading title="Мои полетные листы" />
						{flyList.length ? (
							<div className={styles.items}>
								{flyList?.map((item) => (
									<div className={styles.content} key={nanoid()}>
										<div className={styles.info}>
											<p>Название: {item?.name}</p>
											<p>Майнер: {item?.miner.name}</p>
											<p>Монета: {item?.wallet.currency.name}</p>
											<p>Пул: {item?.poolAddress}</p>
										</div>
										<div className={styles.btns}>
											<MaterialIcon
												name="MdRocketLaunch"
												size={35}
												onClick={() => openModal(item.id)}
											/>
											<MaterialIcon
												name="MdEditSquare"
												size={35}
												className={styles.edit}
												onClick={() => push(`/fly-lists/edit/${item.id}`)}
											/>
											<BsTrash
												size={35}
												className={styles.trash}
												onClick={deleteById(item.id)}
											/>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className={styles.noItems}>
								<SubHeading title="Нет полетных листов" />
							</div>
						)}
						<Button
							appearance="white"
							hover="green"
							onClick={() => push('/fly-lists/new')}
							style={{ margin: '1rem auto 0.5rem auto', display: 'block' }}
						>
							Добавить новый полетный лист
						</Button>
					</>
				)}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				style={modalStyle}
			>
				<ModalStartFlyList flyId={modalFlyId} close={closeModal} />
			</Modal>
		</>
	)
}

export default FlyListScreen
