import { nanoid } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BsTrash } from 'react-icons/bs'

import { Button } from '@/components/ui/Button/Button'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import styles from './Wallets.module.scss'
import { WalletsArr } from './data'

const Wallets: FC = () => {
	const { push } = useRouter()

	return (
		<div className={styles.wallets}>
			<h1>Мои кошельки</h1>
			<div className={styles.items}>
				{WalletsArr.map((wallet) => (
					<div className={styles.item} key={nanoid()}>
						<div className={styles.info}>
							<p>Название: {wallet.name}</p>
							<p>Монета: {wallet.coin.name}</p>
							<p>Адресс: {wallet.address}</p>
						</div>
						<div className={styles.svg}>
							<MaterialIcon
								name="MdEditSquare"
								size={35}
								className={styles.edit}
								onClick={() => push(`/wallets/edit/${wallet.id}`)}
							/>
							<BsTrash size={35} className={styles.trash} />
						</div>
					</div>
				))}
			</div>
			<Button
				appearance="white"
				hover="green"
				onClick={() => push('/wallets/new')}
				style={{ margin: '0 auto', display: 'block' }}
			>
				Добавить новый
			</Button>
		</div>
	)
}

export default Wallets
