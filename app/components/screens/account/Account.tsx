import { axiosPrivate } from 'api/axios'
import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'

import { Button, SubHeading } from '@/components/ui/'

import { useActions } from '@/hooks/useActions'

import { IUser } from '@/shared/types/user.types'

import { modalStyle } from '@/configs/style-modal'

import styles from './Account.module.scss'
import EmailChange from './modal/EmailChange'
import PasswordChange from './modal/PasswordChange'
import PhoneNumberChange from './modal/PhoneNumberChange'

type type = 'email' | 'password' | 'phone'

const AccountScreen: FC = () => {
	const [user, setUser] = useState<IUser>()
	const [modalIsOpen, setIsOpen] = useState<boolean>(false)
	const [type, setType] = useState<type>('email')

	const { logout } = useActions()

	useEffect(() => {
		const getData = async () => {
			const { data } = await axiosPrivate.get('getuserinfo')
			setUser(data)
		}
		getData()
	}, [])

	function openModal() {
		setIsOpen(true)
	}

	const changeButton = (changeType: type) => () => {
		setType(changeType)
		openModal()
	}

	function closeModal() {
		setIsOpen(false)
	}

	const updateUser = async () => {
		const { data } = await axiosPrivate.get('getuserinfo')
		setUser(data)
	}

	const Component = () => {
		switch (type) {
			case 'email':
				return <EmailChange close={closeModal} updateUser={updateUser} />
			case 'password':
				return <PasswordChange close={closeModal} updateUser={updateUser} />
			case 'phone':
				return <PhoneNumberChange close={closeModal} updateUser={updateUser} />
			default:
				return <></>
		}
	}

	return (
		<div className={styles.user}>
			<div className={styles.block}>
				<SubHeading title="Информация о пользователе" />
				<p>
					Имя: <span>{user?.userName}</span>
				</p>
				<p>
					Почта: <span>{user?.email}</span>
				</p>
				<p>
					Номер телефона: <span>{user?.phoneNumber}</span>
				</p>
			</div>
			<div className={cn(styles.block, styles.button)}>
				<Button
					appearance="white"
					hover="green"
					onClick={changeButton('email')}
				>
					Изменить почту
				</Button>
				<Button
					appearance="white"
					hover="green"
					onClick={changeButton('phone')}
				>
					Изменить номер телефона
				</Button>
				<Button
					appearance="white"
					hover="green"
					onClick={changeButton('password')}
				>
					Изменить пароль
				</Button>
				<Button appearance="white" hover="red" onClick={logout}>
					Выйти
				</Button>
			</div>
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

export default AccountScreen
