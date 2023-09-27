import { FC } from 'react'

import { Button, Heading, MaterialIcon, SubHeading } from '@/components/ui'

import styles from './Home.module.scss'

const HomeScreen: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.info}>
					<Heading title="CryptoOS — стабильная, система для майнинга на видеокартах. Максимальный хэшрейт при меньшем потреблении электроэнергии." />
					<Button appearance="white" hover="green">
						Зарегестрироватся
					</Button>
				</div>
				<img
					src="https://static.vecteezy.com/system/resources/previews/013/391/065/non_2x/bitcoin-3d-illustration-free-png.png"
					alt=""
				/>
			</div>
			<div className={styles.info_os}>
				<img
					src="https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png"
					alt=""
				/>
				<div className={styles.text}>
					<p>
						<b>CryptoOS</b> — это специализированная система под Linux для
						майнинга криптовалют на видеокартах, которая позволяет настроить
						контроль и администрирование Ваших ригов. Система оповещений и
						мобильное приложение позволят Вам всегда быть в курсе происходящего
						на Вашей локации и вовремя реагировать на изменения рынка или сбои в
						работе. Платформа CryptoOS управляет устройствами на базе
						графических процессоров NVIDIA и AMD, CPU. Одновременно на одном
						риге могут работать видеокарты AMD и NVIDIA. Также вы можете
						привязывать Ваши кошельки к конкретной карте на риге.
					</p>
					<SubHeading title="Именно тут, всё, что нужно майнерам – в одном мощном дашборде: максимальная стабильность, высокий хэшрейт с минимальным даунтайм и энергопотреблением." />
				</div>
			</div>
			<div className={styles.sys}>
				<div className={styles.item}>
					<Heading title="Минимальные системные требования для CryptoOS:" />
					<p>Intel® Core™ 2 или лучше / AMD am2+ или лучше</p>
					<p>4 ГБ ОЗУ*</p>
					<p>4 ГБ носитель (HDD / SSD / M2 / USB)</p>
					<p>
						* Для добычи ETH на RX Vega 56, RX Vega 64, Radeon VII, RX 5700
						потребуется 6 ГБ оперативной памяти
					</p>
				</div>
				<div className={styles.item}>
					<Heading title="Рекомендуемые системные требования для CryptoOS:" />
					<p>Intel® Core™ i3-3220 3,3 ГГц / AMD FX-6300 3,5 ГГц</p>
					<p>8 ГБ ОЗУ</p>
					<p>8 ГБ SSD-накопитель</p>
				</div>
				<div className={styles.item}>
					<Heading title="Рекомендуемые настройки BIOS:" />
					<p>Рекомендуемые настройки BIOS:</p>
					<p>
						Установите загрузочное устройство HDD/SSD/M2/USB в зависимости от
						носителя с ОС.
					</p>
					<p>Включите 4G encode.</p>
					<p>Установите поддержку PCIe на Auto.</p>
					<p>Включите встроенную графику.</p>
					<p>Установите предпочтительный режим загрузки Legacy mode.</p>
					<p>Отключите виртуализацию.</p>
				</div>
				<Button appearance="white" hover="green">
					Зарегестрироватся
				</Button>
			</div>
			<div className={styles.advantage}>
				<Heading title="Преимущество c CryptoOS" />
				<div className={styles.container}>
					<div className={styles.item}>
						<MaterialIcon name="MdOutlineTableChart" size={50} fill="white" />
						<SubHeading title="Лёгкая регистрация CryptoOS " />
						<p>Стандартная, быстрая регистрация на CryptoOS.</p>
					</div>
					<div className={styles.item}>
						<MaterialIcon
							name="MdSettingsInputComponent"
							size={50}
							fill="white"
						/>
						<SubHeading title="Понятная настройка CryptoOS" />
						<p>Настройка CryptoOS для майнинга на видеокартах NVIDIA, AMD</p>
					</div>
					<div className={styles.item}>
						<MaterialIcon name="MdOutlineCloudUpload" size={50} fill="white" />
						<SubHeading title="Своевременное обновление CryptoOS" />
						<p>Актуальные майнеры, пулы . Свежие драйвера для видеокарт.</p>
					</div>
					<div className={styles.item}>
						<MaterialIcon
							name="MdSettingsInputComponent"
							size={50}
							fill="white"
						/>
						<SubHeading title="Оптимизация и разгон на CryptoOS" />
						<p>Возможность установки оптимального разгона.</p>
					</div>
					<div className={styles.item}>
						<MaterialIcon name="MdTabletAndroid" size={50} fill="white" />
						<SubHeading title="Полное управление и контроль" />
						<p>
							Мониторинг всех первостепенных данных: температура, хешрейт,
							количество шар, настройки тюнинга.
						</p>
					</div>
					<div className={styles.item}>
						<MaterialIcon name="MdSearch" size={50} fill="white" />
						<SubHeading title="FAQ CryptoOS" />
						<p>Готовые решения и ответы на интересующие Вас вопросы.</p>
					</div>
				</div>
			</div>
			<div className={styles.chess}>
				<div className={styles.item}>
					<img
						src="https://cdn-icons-png.flaticon.com/512/7513/7513034.png"
						alt=""
					/>
					<div className={styles.text}>
						<SubHeading title="Контроль и управление с телефона" />
						<p>
							Разработано мобильное приложение для облегченного управления,
							мгновенных уведомлений для немедленного реагирования на них.
							Приложение может быть использовано для полномасштабного удаленного
							управления Вашими ригами. Система оповещений и мобильное
							приложение позволят Вам всегда быть в курсе происходящего на Вашей
							локации и вовремя реагировать на изменения рынка или сбои в
							работе.
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="" />
					<div className={styles.text}>
						<SubHeading
							title="Актуальные монеты, пулы и майнеры
"
						/>
						<p>
							В Вашем распоряжении большой выбор, основных, монет, пулов и
							майнеров, которые своевременно обновляются. Вам больше не нужно
							искать, обновлять майнеры, всё это есть в CryptoOS
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<img
						src="https://www.pngall.com/wp-content/uploads/10/Binance-Coin-Crypto-Logo-PNG-Background.png"
						alt=""
					/>
					<div className={styles.text}>
						<SubHeading title="Тонкая настройка и мониторинг" />
						<p>
							Для опытных майнеров есть раздел кастомного майнинга. Также с
							помощью этой ОС Вы можете следить за потреблением электричества и
							другой статистики при помощи отчетов.
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<img
						src="https://altcoinsbox.com/wp-content/uploads/2023/01/dogecoin-logo.png"
						alt=""
					/>
					<div className={styles.text}>
						<SubHeading title="Наблюдать за работой майнера" />
						<p>
							Кроме этого в консоле есть еще одна полезная команда — miner . С
							помощью этой команды можно наблюдать за работай майнера как это
							было заложено разработчиком майнера.{' '}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.equipment}>
				<Heading title="Список поддерживаемого оборудования:" />
				<div className={styles.item}>
					<SubHeading title="Nvidia:" style={{ color: 'green' }} />
					<p>
						GeForce 10 GTX (1050, 1050 Ti, 1060, 1070, 1070 Ti, 1080, 1080 Ti)
					</p>
					<p>
						GeForce 10 Mining Edition (P106-090, P106-100, P104-100, P102-100)
					</p>
					<p>GeForce 16 GTX (1650, 1650 Super, 1660, 1660 Super, 1660 Ti)</p>
					<p>
						GeForce 20 RTX (2060, 2060 Super, 2070, 2070 Super, 2080, 2080
						Super, 2080 Ti)
					</p>
					<p>
						GeForce 30 RTX (3060, 3060 Ti, 3070, 3070 Ti, 3080, 3080 Ti, 3090)
					</p>
					<p>CMP HX (30 HX, 40 HX, 60HX, 90 HX, 170 HX) серий.</p>
				</div>
				<div className={styles.item}>
					<SubHeading title="AMD:" style={{ color: 'var(--red)' }} />
					<p>Radeon RX 400 (460, 470, 480)</p>
					<p>Radeon RX 500 (550, 560, 570, 580, 590)</p>
					<p>Radeon RX Vega (Vega 56, Vega 64, Radeon VII)</p>
					<p>
						Radeon RX 5000 (5500, 5500 XT, 5600, 5600 XT, 5700, 5700 XT, RX 5700
						XT 50th Anniversary Edition)
					</p>
					<p>Radeon RX 6000 (6600, 6700, 6700 XT, 6800, 6800XT, 6900 XT)</p>
				</div>
			</div>
		</div>
	)
}

export default HomeScreen
