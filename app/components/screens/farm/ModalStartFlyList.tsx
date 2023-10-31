import { FC, useEffect, useState } from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, MaterialIcon, SubHeading } from '@/components/ui'

import { IFarm } from '@/shared/types/farm.types'
import { IFlyLists } from '@/shared/types/flyList.type'

import { FarmsService, FlightSheetsService } from '@/services/index'

import { SelectMyStylesMinList } from '@/configs/stylesSelect.config'

import styles from './../fly-lists/FlyLists.module.scss'

const ModalStartFlyList: FC<{ farmId: number; close: () => void }> = ({
	farmId,
	close,
}) => {
	const [flyList, setFlyList] = useState<IFlyLists[]>()
	const [flyId, setFlyId] = useState<number>(0)

	useEffect(() => {
		const getData = async () => {
			const farms = await FlightSheetsService.getAll()
			setFlyList(farms)
		}

		getData()
	}, [])

	const start = () => {
		return async () => {
			const status = await FarmsService.startFliList(farmId, flyId)
			if (status === 200) {
				toast.success('Полетный лист успешно запущен')
				close()
			}
		}
	}

	const handleChange = (option: any) => {
		setFlyId(option.value)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>
				<SubHeading title="Запуск полетного листа" />
				<MaterialIcon name="MdClose" size={20} onClick={() => close()} />
			</div>
			<div className={styles.main}>
				<label htmlFor="flyList">
					Полетный лист
					<Select
						id="flyList"
						onChange={(option) => handleChange(option)}
						options={flyList?.map((item) => ({
							value: item.id,
							label: item.name,
						}))}
						styles={SelectMyStylesMinList}
						placeholder="Выберите полетный лист"
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
