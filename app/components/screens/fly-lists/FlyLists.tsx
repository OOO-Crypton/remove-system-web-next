import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'

import { Button } from '@/components/ui/Button/Button'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { IFlyLists } from '@/shared/types/flyList.type'

import styles from './FlyLists.module.scss'
import { FlyListsArr } from './data'

const FlyList: FC = () => {
	const [activeFlyList, setActiveFlyList] = useState<IFlyLists | null>(null)
	const [noActiveFlyList, setNoActiveFlyList] = useState<IFlyLists[]>([])
	const [flyList, setFlyList] = useState<IFlyLists[]>(FlyListsArr)

	const { push } = useRouter()

	useEffect(() => {
		setActiveFlyList(flyList.filter((item) => item.isActive)[0])
		setNoActiveFlyList(flyList.filter((item) => !item.isActive))
	}, [])

	return (
		<div className={styles.flyLists}>
			<h1>Мои полетные листы</h1>
			<div className={styles.active}>
				<>
					<h2 style={{ color: 'var(--green)' }}>Активный полетный лист</h2>
					{activeFlyList ? (
						<div className={styles.content}>
							<div className={styles.info}>
								<p>Название: {activeFlyList.name}</p>
								<p>Майнер: {activeFlyList.miner.name}</p>
								<p>Монета: {activeFlyList.coin.name}</p>
								<p>Пулл: {activeFlyList.pull.name}</p>
							</div>
							<div className={styles.btns}>
								<MaterialIcon
									name="MdEditSquare"
									size={35}
									className={styles.edit}
									onClick={() => push(`/fly-lists/edit/${activeFlyList.id}`)}
								/>
								<BsTrash size={35} className={styles.trash} />
							</div>
						</div>
					) : (
						<p>Активного полетного листа нету</p>
					)}
				</>
			</div>
			<h2 style={{ marginBottom: 10 }}>Не активные полетные листы</h2>
			<div className={styles.noActive}>
				{noActiveFlyList.map((item) => (
					<div className={styles.content} key={nanoid()}>
						<div className={styles.info}>
							<p>Название: {item.name}</p>
							<p>Майнер: {item.miner.name}</p>
							<p>Монета: {item.coin.name}</p>
							<p>Пулл: {item.pull.name}</p>
						</div>
						<div className={styles.btns}>
							<MaterialIcon name="MdRocketLaunch" size={35} />
							<MaterialIcon
								name="MdEditSquare"
								size={35}
								className={styles.edit}
								onClick={() => push(`/fly-lists/edit/${item.id}`)}
							/>
							<BsTrash size={35} className={styles.trash} />
						</div>
					</div>
				))}
			</div>
			<Button
				appearance="white"
				hover="green"
				onClick={() => push('/fly-lists/new')}
				style={{ margin: '1rem auto 0.5rem auto', display: 'block' }}
			>
				Добавить новый полетный лист
			</Button>
		</div>
	)
}

export default FlyList
