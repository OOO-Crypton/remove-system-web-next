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
							Ссылка на скачивание <Link href="/">скачать</Link>
						</p>
						<details className={styles.infoDetails}>
							<summary>Установка загрузочной флешки</summary>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
									laudantium sunt, dolorem dolor porro quaerat! Possimus numquam
									quod eligendi incidunt magnam eaque earum assumenda hic? Quae
									unde quas necessitatibus dicta. Error illum assumenda
									temporibus tenetur animi quam ex aliquam est perspiciatis
									reiciendis odit quis sunt ad quasi, dolore dicta magni nam.
									Quae illum aliquid, porro atque aut dolores quas alias? Iure
									ad dolorum dolores consequuntur error alias rerum eius
									quisquam facere, quod incidunt deleniti doloremque? Distinctio
									fugiat nostrum nulla, atque non quas. Optio dolor esse
									pariatur enim iusto id animi. Qui ipsum omnis dolor voluptatem
									commodi sed facilis, fugit sint amet quod quibusdam ex minima
									architecto modi pariatur aut est sunt! Temporibus veniam natus
									magnam, facilis non amet blanditiis earum. Non ipsum, numquam
									ratione minima obcaecati facilis quisquam error, soluta
									provident laudantium nobis tempore necessitatibus amet? Velit
									illo ipsum animi, ullam ratione, nobis, laudantium pariatur
									incidunt veniam doloribus numquam nulla. Quibusdam unde
									deserunt aliquam doloremque eaque accusamus aut, autem tempore
									id amet optio eligendi quas quod natus vitae vel quasi
									suscipit dicta, minus incidunt ipsa eos ducimus labore error!
									Totam? Illo numquam vero eveniet libero molestiae eos eius
									vel! Repudiandae soluta praesentium pariatur ea hic aperiam
									quas minus, commodi minima sapiente tempora. Iusto at deserunt
									velit distinctio autem iure hic. Porro vitae amet quae eveniet
									dicta doloremque possimus consequuntur sequi velit!
									Accusantium quas commodi omnis! Totam consequuntur voluptates
									quis. Error alias praesentium, fugit porro nesciunt ut! Quod
									officia expedita consequatur? Provident iusto quibusdam atque
									nulla aperiam optio enim fugiat. Exercitationem, ad?
									Perspiciatis fugit, labore animi neque sit corporis, iste
									alias dolore in harum quia quos repellat suscipit eos!
									Doloribus, hic. Distinctio quos provident dolore odio pariatur
									a praesentium minus, nisi doloribus perferendis quisquam vero
									quaerat totam ut consequuntur delectus iure magnam omnis quo
									eum accusantium. Modi temporibus esse inventore quidem!
								</p>
							</div>
						</details>
						<details className={styles.infoDetails}>
							<summary>Установка системы на ферму с загрузочной флешки</summary>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
									laudantium sunt, dolorem dolor porro quaerat! Possimus numquam
									quod eligendi incidunt magnam eaque earum assumenda hic? Quae
									unde quas necessitatibus dicta. Error illum assumenda
									temporibus tenetur animi quam ex aliquam est perspiciatis
									reiciendis odit quis sunt ad quasi, dolore dicta magni nam.
									Quae illum aliquid, porro atque aut dolores quas alias? Iure
									ad dolorum dolores consequuntur error alias rerum eius
									quisquam facere, quod incidunt deleniti doloremque? Distinctio
									fugiat nostrum nulla, atque non quas. Optio dolor esse
									pariatur enim iusto id animi. Qui ipsum omnis dolor voluptatem
									commodi sed facilis, fugit sint amet quod quibusdam ex minima
									architecto modi pariatur aut est sunt! Temporibus veniam natus
									magnam, facilis non amet blanditiis earum. Non ipsum, numquam
									ratione minima obcaecati facilis quisquam error, soluta
									provident laudantium nobis tempore necessitatibus amet? Velit
									illo ipsum animi, ullam ratione, nobis, laudantium pariatur
									incidunt veniam doloribus numquam nulla. Quibusdam unde
									deserunt aliquam doloremque eaque accusamus aut, autem tempore
									id amet optio eligendi quas quod natus vitae vel quasi
									suscipit dicta, minus incidunt ipsa eos ducimus labore error!
									Totam? Illo numquam vero eveniet libero molestiae eos eius
									vel! Repudiandae soluta praesentium pariatur ea hic aperiam
									quas minus, commodi minima sapiente tempora. Iusto at deserunt
									velit distinctio autem iure hic. Porro vitae amet quae eveniet
									dicta doloremque possimus consequuntur sequi velit!
									Accusantium quas commodi omnis! Totam consequuntur voluptates
									quis. Error alias praesentium, fugit porro nesciunt ut! Quod
									officia expedita consequatur? Provident iusto quibusdam atque
									nulla aperiam optio enim fugiat. Exercitationem, ad?
									Perspiciatis fugit, labore animi neque sit corporis, iste
									alias dolore in harum quia quos repellat suscipit eos!
									Doloribus, hic. Distinctio quos provident dolore odio pariatur
									a praesentium minus, nisi doloribus perferendis quisquam vero
									quaerat totam ut consequuntur delectus iure magnam omnis quo
									eum accusantium. Modi temporibus esse inventore quidem!
								</p>
							</div>
						</details>
						<details className={styles.infoDetails}>
							<summary>Настройка локальной система</summary>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
									laudantium sunt, dolorem dolor porro quaerat! Possimus numquam
									quod eligendi incidunt magnam eaque earum assumenda hic? Quae
									unde quas necessitatibus dicta. Error illum assumenda
									temporibus tenetur animi quam ex aliquam est perspiciatis
									reiciendis odit quis sunt ad quasi, dolore dicta magni nam.
									Quae illum aliquid, porro atque aut dolores quas alias? Iure
									ad dolorum dolores consequuntur error alias rerum eius
									quisquam facere, quod incidunt deleniti doloremque? Distinctio
									fugiat nostrum nulla, atque non quas. Optio dolor esse
									pariatur enim iusto id animi. Qui ipsum omnis dolor voluptatem
									commodi sed facilis, fugit sint amet quod quibusdam ex minima
									architecto modi pariatur aut est sunt! Temporibus veniam natus
									magnam, facilis non amet blanditiis earum. Non ipsum, numquam
									ratione minima obcaecati facilis quisquam error, soluta
									provident laudantium nobis tempore necessitatibus amet? Velit
									illo ipsum animi, ullam ratione, nobis, laudantium pariatur
									incidunt veniam doloribus numquam nulla. Quibusdam unde
									deserunt aliquam doloremque eaque accusamus aut, autem tempore
									id amet optio eligendi quas quod natus vitae vel quasi
									suscipit dicta, minus incidunt ipsa eos ducimus labore error!
									Totam? Illo numquam vero eveniet libero molestiae eos eius
									vel! Repudiandae soluta praesentium pariatur ea hic aperiam
									quas minus, commodi minima sapiente tempora. Iusto at deserunt
									velit distinctio autem iure hic. Porro vitae amet quae eveniet
									dicta doloremque possimus consequuntur sequi velit!
									Accusantium quas commodi omnis! Totam consequuntur voluptates
									quis. Error alias praesentium, fugit porro nesciunt ut! Quod
									officia expedita consequatur? Provident iusto quibusdam atque
									nulla aperiam optio enim fugiat. Exercitationem, ad?
									Perspiciatis fugit, labore animi neque sit corporis, iste
									alias dolore in harum quia quos repellat suscipit eos!
									Doloribus, hic. Distinctio quos provident dolore odio pariatur
									a praesentium minus, nisi doloribus perferendis quisquam vero
									quaerat totam ut consequuntur delectus iure magnam omnis quo
									eum accusantium. Modi temporibus esse inventore quidem!
								</p>
							</div>
						</details>
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
