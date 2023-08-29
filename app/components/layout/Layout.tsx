import dynamic from 'next/dynamic'
import { FC, ReactNode } from 'react'

import { Header } from './Header/Header'
import styles from './Layout.module.scss'

const DynamicInfoAll = dynamic(() => import('../ui/infoAll/InfoAll'), {
	ssr: false,
})

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.data}>
				<DynamicInfoAll />
				<div className={styles.container}>{children}</div>
			</main>
		</div>
	)
}

export default Layout
