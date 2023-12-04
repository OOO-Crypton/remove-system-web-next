import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui'

import { FarmsService } from '@/services/index'

import styles from './FarmNew.module.scss'

export type TypeCase = 'download' | 'add'

const FarmNewScreen: FC = () => {
	const { push } = useRouter()
	const [type, setType] = useState<TypeCase>('download')
	const [idNewFarm, setIdNewFarm] = useState<string>('')

	useEffect(() => {
		if (type === 'add') {
			const fetch = async () => {
				const data = await FarmsService.add()
				setIdNewFarm(data)
			}

			fetch()
		}
	}, [type])

	const body = () => {
		switch (type) {
			case 'download':
				return (
					<div className={styles.download}>
						<p>
							Для начала работы необходимо скачать и установить образ системы на
							новую ферму
						</p>
						<p>
							Ссылка на скачивание{' '}
							<Link
								href="https://disk.yandex.ru/d/HiJ9pMgBhfAYTg"
								target="_blank"
								style={{ color: 'var(--green)' }}
							>
								скачать
							</Link>
						</p>
						<details className={styles.infoDetails}>
							<summary>Создание загрузочной флешки</summary>
							<ol
								style={{
									listStyle: 'auto',
									paddingLeft: '2rem',
									color: 'white',
								}}
							>
								<li>Скачайте ISO со страницы</li>
								<li>Скачать и установить rufus</li>
								<li>Подключить usb-флешку в пк</li>
								<li>Запустить rufus</li>
								<li>Выбрать устройство</li>
								<li>Выбрать ISO файл</li>
								<li>
									Выберите схему разделов, соответствующую используемой вашим
									накопителем: MBR или GPT
								</li>
								<li>Нажмите старт</li>
								<li>
									При появлении диалога, выберите первый вариант: «Записать
									ISO-образ…»
								</li>
								<li>Согласитесь докачать недостающие компоненты</li>
								<li>Подтвердите форматирование устройства</li>
								<li>Дожидайтесь завершения копирования файлов на носитель</li>
							</ol>
						</details>
						<details className={styles.infoDetails}>
							<summary>Установка системы на ферму с загрузочной флешки</summary>
							<ol
								style={{
									listStyle: 'auto',
									paddingLeft: '2rem',
									color: 'white',
								}}
							>
								<li>
									Подключаем подготовленную на прошлом этапе флешку к
									компьютеру, выключаем его
								</li>
								<li>
									Нажмите кнопку питания для его обратного включения и быстро
									нажимаем по клавише для вызова меню БИОС
								</li>
								<li>
									Здесь вам потребуется переставить приоритет на загрузку с
									флешки. Для этого перейдите во вкладку Boot, затем открываем
									пункт Boot Device Priority и с помощью клавиш навигации,
									указанных внизу страницы, ставим на первое место наш
									накопитель. Если вы не знаете английский язык, то
									воспользуйтесь переводчиком. Меню BIOS на всех компьютерах
									разный, поэтому одной общей инструкции для изменения
									приоритета загрузки нет
								</li>
								<li>
									Когда вы установите подготовленный накопитель на первое место,
									выйдите из меню с сохранением данных. Дождитесь, пока ПК
									загрузит данные
								</li>
								<li>
									При правильном выполнении предыдущих шагов, вы увидите
									приветственное окно установки. В левом блоке вы можете выбрать
									язык, а справа тип установки: это может быть простой запуск
									Ubuntu для тестирования (система не будет установлена, вы
									можете просто ознакомиться с ней, например) ну и, собственно,
									полноценная установка. Нажмите на второй вариант
								</li>
								<li>
									Поставьте необходимые параметры в следующем окне и нажмите
									«Продолжить»
								</li>
								<li>
									Теперь нужно будет выбрать тип инсталляции. Как говорилось в
									описании, систему можно ставить как рядом с уже имеющейся, так
									и вместо неё. Если вам нужна будет Windows, то можете взять
									первый вариант. Если же вы хотите только Убунту, то выбираем
									второй тип. Жмём «Продолжить»
								</li>
								<li>
									В следующем окне пользователю предлагается распределить место
									на диске под систему и файлы. Для этого передвигайте
									разделитель, чтобы установить необходимые параметры. Когда вы
									всё распределите, нажмите «Установить сейчас», а в появившемся
									диалоговом окне кликните «Продолжить», заведомо прочитав
									представленную информацию
								</li>
								<li>
									Спустя некоторое время вы увидите окно с названием «Кто вы?».
									Запишите все данные по своему усмотрению (имя, пароль и так
									далее), затем кликните «Продолжить»
								</li>
								<li>
									Дождитесь завершения процесса. После перезагрузки компьютера
									будет представлен интерфейс операционной системы
								</li>
							</ol>
						</details>
						{/* <details className={styles.infoDetails}>
							<summary>Настройка локальной системы</summary>
							<div></div>
						</details> */}
						<Button
							appearance="white"
							hover="green"
							onClick={() => setType('add')}
						>
							Далее
						</Button>
					</div>
				)
			case 'add':
				return (
					<div className={styles.add}>
						<p>
							Новый ID фермы&nbsp;
							<b style={{ color: 'var(--green)' }}>{idNewFarm}</b>
						</p>
						<p>Введите полученный ID при настройке локальной системы</p>
						<Button
							appearance="white"
							hover="green"
							onClick={() => push('/farms')}
							style={{ marginTop: 10 }}
						>
							Готово
						</Button>
					</div>
				)
			default:
				break
		}
	}

	return <div className={styles.addFarm}>{body()}</div>
}

export default FarmNewScreen
