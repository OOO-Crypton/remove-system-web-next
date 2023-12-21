import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { Button, Field, Heading, SubHeading } from '@/components/ui'

const arr = [
	{
		name: 'Помощь в отоплении домов',
		description: [
			'Наиболее очевидное использование тепла - это отопление. Многие майнеры используют тепло от майнинговых установок для обогрева домов или офисов, особенно в холодные зимние месяцы. Это уменьшает потребность в дополнительном источнике отопления и позволяет снизить общие энергетические затраты.',
		],
	},
	{
		name: 'Применение в виноделии',
		description: [
			'Процесс виноделия требует строгого контроля температуры на разных этапах, включая ферментацию и выдержку вина. Тепло, вырабатываемое майнинговыми установками, может быть использовано для поддержания оптимальных условий на этих этапах, особенно в холодные сезоны или в регионах с холодным климатом.',
			'Во время ферментации важно поддерживать стабильную температуру, обычно в диапазоне от 20 до 28 градусов Цельсия для красного вина и от 15 до 18 градусов для белого вина. Тепло от майнинговых установок может быть эффективно использовано для поддержания этих температур, даже если окружающая температура снижается. Кроме того, некоторые виды вина требуют длительного периода выдержки при контролируемой температуре. Тепло от майнинга также может быть использовано для поддержания этой температуры в течение всего периода выдержки. Помимо этого, использование тепла от майнинга может помочь винодельческим предприятиям снизить затраты на энергию и улучшить свою устойчивость к изменениям климата. В то же время, они могут увеличить свою доходность от майнинга, так как тепло, которое ранее было просто побочным продуктом, теперь становится ценным ресурсом.',
		],
	},
	{
		name: 'Майнинг и сельское хозяйство',
		description: [
			'Для обогрева теплиц идеально подходят майнеры на иммерсионном охлаждении. В отличие от ферм «на воздухе», эти установки не только нагревают воздух в помещении, но и позволяют, например, подогревать воду для капельного полива, гидропонных и аквапонных систем. При помощи настраиваемой автоматики можно обеспечить круглосуточное и стабильное поддержание необходимой для жизнедеятельности растений температуры. Излишки тепла сбрасываются в окружающую среду при помощи градирни. Среди преимуществ установок на иммерсионном охлаждении это, в частности, то, что они менее чувствительны к высокой влажности в теплице, что позволяет поддерживать благоприятный микроклимат для растений. К тому же диэлектрическая жидкость и иммерсионная установка в целом не выделяет никаких вредных для человека и растений веществ. Стойка на иммерсионном охлаждении занимает мало места, поскольку обладает вертикальной конструкцией и может устанавливаться на любой твёрдой площадке внутри теплицы. Также стоит отметить, что иммерсионные установки легко подбираются в зависимости от потребностей в выделяемой тепловой мощности.',
		],
	},
]

interface IForm {
	name: string
	description: string
}

export const InfoRecRazgonScreen = () => {
	const [current, setCurrent] = useState<number>()

	const {
		register,
		handleSubmit,
		formState: { errors },
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
			<Heading title="Формирование рекомендаций по альтернативному использованию выделяемой тепловой энергии" />
			<div className="flex justify-around gap-4">
				<Select
					className="shrink-0 w-[275px] h-min"
					options={arr.map((item, idx) => {
						return {
							label: item.name,
							value: idx,
						}
					})}
					onChange={(value) => {
						setCurrent(value?.value)
					}}
					placeholder="Выберите"
				/>
				{current !== undefined && (
					<div>
						<SubHeading title={arr[current].name} />
						<div>
							{arr[current].description.map((item, idx) => (
								<p key={idx} className="mb-2">
									{item}
								</p>
							))}
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
					placeholder="Название"
					error={errors.name}
				/>
				<Field
					{...register('description', {
						required: 'Поле обязательно!',
					})}
					placeholder="Название"
					error={errors.description}
				/>
				<Button appearance={'white'} hover={'green'} className="mt-3">
					Добавить
				</Button>
			</form>
		</div>
	)
}
