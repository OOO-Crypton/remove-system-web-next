import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Field, Heading, SubHeading } from '@/components/ui'

const arr = [
	{
		name: 'NVIDIA GeForce RTX 3070 Ti LHR 8192 MB',
		info: {
			ETC: {
				Core: 1200,
				Mem: 2250,
			},
			RVN: {
				Core: 1350,
				Mem: 2000,
			},
			ERG: {
				Core: 1500,
				Mem: 2396,
			},
			KAS: {
				Core: 1500,
				Mem: 2396,
			},
		},
	},
	{
		name: 'NVIDIA GeForce RTX 3060 Ti LHR 8192 MB',
		info: {
			ETC: {
				Core: 1300,
				Mem: 2300,
			},
			RVN: {
				Core: 0,
				Mem: 2000,
			},
			ERG: {
				Core: 1350,
				Mem: 2000,
			},
			KAS: {
				Core: 200,
				Mem: 2000,
			},
		},
	},
	{
		name: 'NVIDIA GeForce GTX 1660 SUPER 6144 MB',
		info: {
			ETC: {
				Core: 1550,
				Mem: 900,
			},
			RVN: {
				Core: 100,
				Mem: 1000,
			},
			ERG: {
				Core: 1100,
				Mem: 1800,
			},
			KAS: {
				Core: 1470,
				Mem: 810,
			},
		},
	},
	{
		name: 'NVIDIA GeForce GTX 1660  6144 MB Palit',
		info: {
			ETC: {
				Core: 1300,
				Mem: 990,
			},
			RVN: {
				Core: 100,
				Mem: 1000,
			},
			ERG: {
				Core: 1110,
				Mem: 1700,
			},
			KAS: {
				Core: 1300,
				Mem: 790,
			},
		},
	},
	{
		name: 'AMD RX 580 8192 MB',
		info: {
			ETC: {
				Core: 1190,
				Mem: 2250,
			},
			RVN: {
				Core: 1200,
				Mem: 2250,
			},
			ERG: {
				Core: 1210,
				Mem: 2250,
			},
			KAS: {
				Core: 1150,
				Mem: 1950,
			},
		},
	},
]

interface IForm {
	name: string
	ERGCore: string
	ERGMem: string
	ETCCore: string
	ETCMem: string
	KASCore: string
	KASMem: string
	RVNCore: string
	RVNMem: string
}

export const InfoRazgonScreen = () => {
	const [current, setCurrent] = useState<number>()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<IForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IForm> = async (data) => {
		setTimeout(() => {
			toast.success('Запрос успешно отправлен, ожидайте')
			reset()
		}, 2000)
	}

	return (
		<div>
			<Heading title="Формирование рекомендаций по разгону" />
			<div className="flex justify-around">
				<Select
					className="w-[400px] h-min"
					options={arr.map((item, idx) => {
						return {
							label: item.name,
							value: idx,
						}
					})}
					onChange={(value) => {
						setCurrent(value?.value)
					}}
					placeholder="Выберите видеокарту"
				/>
				{current !== undefined && (
					<div>
						<div className="flex flex-row justify-between w-[300px]">
							<SubHeading title="ERG" className="mb-1" />
							<div>
								<p>
									Core: <span>{arr[current].info.ERG.Core}</span>
								</p>
								<p>
									Mem: <span>{arr[current].info.ERG.Mem}</span>
								</p>
							</div>
						</div>
						<div className="flex flex-row justify-between w-[300px]">
							<SubHeading title="ETC" className="mb-1" />
							<div>
								<p>
									Core: <span>{arr[current].info.ETC.Core}</span>
								</p>
								<p>
									Mem: <span>{arr[current].info.ETC.Mem}</span>
								</p>
							</div>
						</div>
						<div className="flex flex-row justify-between w-[300px]">
							<SubHeading title="KAS" className="mb-1" />
							<div>
								<p>
									Core: <span>{arr[current].info.KAS.Core}</span>
								</p>
								<p>
									Mem: <span>{arr[current].info.KAS.Mem}</span>
								</p>
							</div>
						</div>
						<div className="flex flex-row justify-between w-[300px]">
							<SubHeading title="RVN" className="mb-1" />
							<div>
								<p>
									Core: <span>{arr[current].info.RVN.Core}</span>
								</p>
								<p>
									Mem: <span>{arr[current].info.RVN.Mem}</span>
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
			<form
				className="flex flex-col my-6 mx-auto w-1/2 min-w-[300px]"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title="Добавить свой вариант" />
				<Field
					{...register('name', {
						required: 'Поле обязательно!',
					})}
					placeholder="Название видеокарты"
					disabled={isSubmitting}
					error={errors.name}
				/>
				<SubHeading title="ERG" className="mb-1" />
				<div className="flex gap-2 m-auto">
					<Field
						{...register('ERGCore', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Core"
						disabled={isSubmitting}
						error={errors.ERGCore}
					/>
					<Field
						{...register('ERGMem', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Mem"
						disabled={isSubmitting}
						error={errors.ERGMem}
					/>
				</div>
				<SubHeading title="ETC" className="mb-1" />
				<div className="flex gap-2 m-auto">
					<Field
						{...register('ETCCore', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Core"
						disabled={isSubmitting}
						error={errors.ETCCore}
					/>
					<Field
						{...register('ETCMem', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Mem"
						disabled={isSubmitting}
						error={errors.ETCMem}
					/>
				</div>
				<SubHeading title="KAS" className="mb-1" />
				<div className="flex gap-2 m-auto">
					<Field
						{...register('KASCore', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Core"
						disabled={isSubmitting}
						error={errors.KASCore}
					/>
					<Field
						{...register('KASMem', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Mem"
						disabled={isSubmitting}
						error={errors.KASMem}
					/>
				</div>
				<SubHeading title="RVN" className="mb-1" />
				<div className="flex gap-2 m-auto">
					<Field
						{...register('RVNCore', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Core"
						disabled={isSubmitting}
						error={errors.RVNCore}
					/>
					<Field
						{...register('RVNMem', {
							required: 'Поле обязательно!',
						})}
						type="number"
						min={0}
						placeholder="Mem"
						disabled={isSubmitting}
						error={errors.RVNMem}
					/>
				</div>
				<Button appearance={'white'} hover={'green'} className="mt-3">
					Добавить
				</Button>
			</form>
		</div>
	)
}
