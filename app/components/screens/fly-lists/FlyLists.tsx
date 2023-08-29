import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
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

import styles from './FlyLists.module.scss'

const FlyListScreen: FC = () => {
	const [flyList, setFlyList] = useState<IFlyLists[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const getData = async () => {
			const flyList = await FlightSheetsService.getAll()

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
										<p>Пул: {item?.pool?.name}</p>
									</div>
									<div className={styles.btns}>
										<MaterialIcon name="MdRocketLaunch" size={35} />
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
	)
}

export default FlyListScreen
