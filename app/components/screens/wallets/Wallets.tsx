import { nanoid } from '@reduxjs/toolkit'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'

import { Button, Loader, MaterialIcon } from '@/components/ui'

import { IWallet } from '@/shared/types/wallet.type'

import { WalletsService } from '@/services/index'

import styles from './Wallets.module.scss'

const WalletsScreen: FC = () => {
	const [wallets, setWallets] = useState<IWallet[]>([])
	const [isLoad, setIsLoad] = useState<boolean>(true)

	const { push } = useRouter()

	useEffect(() => {
		const get = async () => {
			const data = await WalletsService.getAll()

			setWallets(data)
			setIsLoad(false)
		}
		get()
	}, [])

	const deleteById = (id: string) => async () => {
		const data = await WalletsService.delete(id)

		if (data === 200) {
			const data = await WalletsService.getAll()
			setWallets(data)
		}
	}

	return (
		<div
			className={cn(styles.wallets, {
				[styles.isLoad]: isLoad,
			})}
		>
			{isLoad ? (
				<Loader />
			) : (
				<>
					<h1>Мои кошельки</h1>
					<div className={styles.items}>
						{wallets?.length > 0 ? (
							wallets?.map((wallet) => (
								<div className={styles.item} key={nanoid()}>
									<div className={styles.info}>
										<p>Название: {wallet.name}</p>
										<p>Монета: {wallet.currency?.name}</p>
										<p>Адресс: {wallet.address}</p>
									</div>
									<div className={styles.svg}>
										<MaterialIcon
											name="MdEditSquare"
											size={35}
											className={styles.edit}
											onClick={() => push(`/wallets/edit/${wallet.id}`)}
										/>
										<BsTrash
											size={35}
											className={styles.trash}
											onClick={deleteById(wallet.id)}
										/>
									</div>
								</div>
							))
						) : (
							<div>Кошельков нет</div>
						)}
					</div>
					<Button
						appearance="white"
						hover="green"
						onClick={() => push('/wallets/new')}
						style={{ margin: '0 auto', display: 'block' }}
					>
						Добавить новый
					</Button>
				</>
			)}
		</div>
	)
}

export default WalletsScreen
