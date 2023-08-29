import { axiosPrivate } from 'api/axios'
import { toast } from 'react-toastify'

export interface IChangeEmail {
	password: string
	email: string
}

export interface IChangePassword {
	oldPassword: string
	newPassword: string
}

export interface IChangePhoneNumber {
	password: string
	phoneNumber: string
}

export const UserService = {
	async changeEmail(body: IChangeEmail) {
		try {
			const { status } = await axiosPrivate.patch('/changeemail', body)

			return status
		} catch (e) {
			console.log(e)
			toast.error('Проверьте введенные данные')
		}
	},

	async changePassword(body: IChangePassword) {
		try {
			const { status } = await axiosPrivate.patch('/changepassword', body)

			return status
		} catch (e) {
			console.log(e)
			toast.error('Проверьте введенные данные')
		}
	},

	async changePhoneNumber(body: IChangePhoneNumber) {
		try {
			const { status } = await axiosPrivate.patch('/changephone', body)

			return status
		} catch (e) {
			console.log(e)
			toast.error('Проверьте введенные данные')
		}
	},
}
