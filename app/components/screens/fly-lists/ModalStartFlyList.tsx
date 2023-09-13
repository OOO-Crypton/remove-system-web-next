import { FC, useEffect, useState } from 'react'
import Select from 'react-select'

import { Button, MaterialIcon, SubHeading } from '@/components/ui'

import { IMiner } from '@/shared/types/flyList.type'

import { FlightSheetsService } from '@/services/index'

import { SelectMyStylesMinList } from '@/configs/stylesSelect.config'

import styles from './FlyLists.module.scss'

const ModalStartFlyList: FC<{ close: () => void }> = ({ close }) => {
	const [miner, setMiner] = useState<IMiner[]>()

	useEffect(() => {
		const getData = async () => {
			const miner = await FlightSheetsService.getMinerList()
			setMiner([...miner, ...miner])
		}

		getData()
	}, [])

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
						options={miner?.map((item) => ({
							value: item.id,
							label: item.name,
						}))}
						styles={SelectMyStylesMinList}
						placeholder="Выберите ферму"
						required
					/>
				</label>
				<Button appearance="white" hover="green" type="submit">
					Запустить
				</Button>
			</div>
		</div>
	)
}

export default ModalStartFlyList
