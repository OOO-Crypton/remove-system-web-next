import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import { Header } from './Header/Header';
import InfoAll from '../ui/infoAll/InfoAll';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
	  <div className={styles.wrapper}>
		<Header />
		<main className={styles.data}>
		  <InfoAll />
		  <div className={styles.container}>{children}</div>
		</main>
	  </div>
	);
  };

export default Layout
