import Link from 'next/link'
import { useRouter } from 'next/router'

import { MaterialIcon } from '@/components/ui'

import { useAuth } from '@/hooks/useAuth'

import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
	const { token } = useAuth()
	const { push } = useRouter()

	function openNav() {
		document.getElementById('sidebar')!.style.width = '100%'
	}

	function closeSidebar() {
		document.getElementById('sidebar')!.style.width = '0'
	}

	return (
		<>
			<header className={styles.sidebar}>
				<MaterialIcon
					name="MdMenu"
					size={30}
					className={styles.openbtn}
					onClick={openNav}
					fill="white"
				/>
				<div id="sidebar" className={styles.sidebarBlock}>
					<MaterialIcon
						name="MdOutlineClose"
						className={styles.closeBtn}
						onClick={closeSidebar}
					/>
					<Link href="/" className={styles.logo} onClick={closeSidebar}>
						<picture id="logo">
							<source srcSet="/img/webp/logo.webp" type="image/webp" />
							<img src="/img/png/logo.png" alt="err" height="50" width="150" />
						</picture>
					</Link>
					<nav>
						{token ? (
							<ul className={styles.topmenu}>
								<li>
									<Link href="/" onClick={closeSidebar}>
										Главная
									</Link>
								</li>
								<li>
									<Link href="/fly-lists" onClick={closeSidebar}>
										Полетные листы
									</Link>
								</li>
								<li>
									<Link href="/farms" onClick={closeSidebar}>
										Фермы
									</Link>
								</li>
								<li>
									<Link href="/wallets" onClick={closeSidebar}>
										Кошельки
									</Link>
								</li>
								<li>
									<Link href="/analytics" onClick={closeSidebar}>
										Аналитика
									</Link>
								</li>
								<li>
									<Link href="/my-account" onClick={closeSidebar}>
										Личный кабинет
									</Link>
								</li>
							</ul>
						) : (
							<ul className={styles.topmenu}>
								<li>
									<Link href="/" onClick={closeSidebar}>
										Главная
									</Link>
								</li>
								<li>
									<Link href="/auth" onClick={closeSidebar}>
										Авторизация
									</Link>
								</li>
								<li>
									<Link href="/register" onClick={closeSidebar}>
										Регистрация
									</Link>
								</li>
							</ul>
						)}
					</nav>
				</div>
				<div className={styles.content}>
					<Link href="/" className={styles.logo}>
						<picture id="logo">
							<source srcSet="/img/webp/logo.webp" type="image/webp" />
							<img src="/img/png/logo.png" alt="err" height="50" width="150" />
						</picture>
					</Link>
					<nav>
						{token ? (
							<ul className={styles.topmenu}>
								<li>
									<Link href="/">Главная</Link>
								</li>
								<li>
									<Link href="/fly-lists">Полетные листы</Link>
								</li>
								<li>
									<Link href="/farms">Фермы</Link>
								</li>
								<li>
									<Link href="/wallets">Кошельки</Link>
								</li>
								<li>
									<Link href="/analytics">Аналитика</Link>
								</li>
								<li>
									<Link href="/my-account">Личный кабинет</Link>
								</li>
							</ul>
						) : (
							<ul className={styles.topmenu}>
								<li>
									<Link href="/">Главная</Link>
								</li>
								<li>
									<Link href="/auth">Авторизация</Link>
								</li>
								<li>
									<Link href="/register">Регистрация</Link>
								</li>
							</ul>
						)}
					</nav>
				</div>
			</header>
		</>
	)
}
