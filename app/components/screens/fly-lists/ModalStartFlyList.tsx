import { FC, useEffect, useState } from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, MaterialIcon, SubHeading } from '@/components/ui'

import { IFarm } from '@/shared/types/farm.types'

import { FarmsService } from '@/services/index'

import { SelectMyStylesMinList } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const ModalStartFlyList: FC<{ flyId: string; close: () => void }> = ({
	flyId,
	close,
}) => {
	const [miner, setMiner] = useState<IFarm[]>()
	const [farm, setFarm] = useState<number>(0)

	useEffect(() => {
		const getData = async () => {
			const farms = await FarmsService.all()
			setMiner(farms)
		}

		getData()
	}, [])

	const start = () => {
		return async () => {
			const status = await FarmsService.startFliList(farm?.toString(), flyId)
			if (status === 200) {
				toast.success('Полетный лист успешно запущен')
				close()
			}
		}
	}

	const handleChange = (option: any) => {
		console.log(option.value)

		setFarm(option.value)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title="Запуск полетного листа" />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<div className={styles.main}>
				<label htmlFor="mainer">
					Ферма
					<Select
						id="mainer"
						onChange={(option) => handleChange(option)}
						options={miner?.map((item) => ({
							value: item.id,
							label: item.localSystemID,
						}))}
						styles={SelectMyStylesMinList}
						placeholder="Выберите ферму"
						required
					/>
				</label>
				<Button appearance="white" hover="green" onClick={start()}>
					Запустить
				</Button>
			</div>
		</div>
	)
}

export default ModalStartFlyList
