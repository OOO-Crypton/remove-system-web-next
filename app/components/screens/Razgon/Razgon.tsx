import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import styles from './Razgon.module.scss'

const Razgon: FC = () => {
	return (
		<div className={styles.container}>
			<Heading
				style={{ textAlign: 'center' }}
				title="Как разгонять видеокарты Nvidia и AMD для майнинга на разных алгоритмах"
			/>
			<p>
				2023 — год массовой популярности криптовалют. Биткоин уже взял уровень
				58 тысяч, а монеты поменьше не спят и также устанавливают новые
				исторические максимумы. Одновременно с этим существенно выросла
				популярность майнинга. К примеру, если в конце ноября на майнинг-пуле
				2Miners криптовалюту добывало 11 тысяч человек, то сейчас их больше 40
				тысяч. Если вы также решили присоединиться к добыче монет и делать это с
				видеокартами Nvidia, данная статья для вас. Рассказываем, как разгонять
				видеокарты для увеличения прибыли и делать это правильно для разных
				алгоритмов.
			</p>

			<p>
				Майнеры обеспечивают защиту криптовалюты от возможных атак или отмены
				транзакций. Чем больше майнеров — тем лучше защита сети и сложнее
				проведение атаки на неё, вплоть до невозможности атаки из-за отсутствия
				в мире необходимого количества необходимого майнинг-оборудования
				(атакующий не может найти в аренду такое количество видеокарт, которое
				обеспечит 50% хешрейта атакуемой сети).
			</p>
			<p>
				За эту работа любая сеть криптовалюты системы PoW (Proof of Work —
				доказательство работы) платит майнерам своими монетами. Они берутся из
				выпуска новых монет и комиссионных с транзакций. Когда майнеры находят
				новый блок в сети криптовалюты, они получают за это награду — полюс
				комиссию с переводов которые были включены в этот блок.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Какие криптовалюты майнить в 2023 году?"
			/>
			<p>
				В конце 2020 года и начале 2023 года максимально прибыльной в майнинге
				монетой был Эфириум. Это также Ethereum, ETH или просто «эфир» на
				майнерском жаргоне.
			</p>
			<p>
				Для эффективного майнинга эфира в 2023 году необходима карта с 5 ГБ и
				больше видеопамяти на видеокарте.
			</p>
			<p>Дефицит видеокарт Nvidia</p>
			<p>
				Те видеокарты, которые уже не могут майнить Эфир, относительно прибыльно
				майнят Ravencoin RVN, но об этом ниже.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Настройка разгона видеокарт Nvidia и AMD для майнинга Эфира"
			/>
			<p>
				Если вы не хотите вникать в тонкости настроек, а просто ищите заветные
				значения то они приведены ниже в наших таблицах. Но мы советуем вам
				прочитать всю статью и понять, как работает разгон и настройка видеокарт
				для майнинга. После прочтения вы сможете более точно настроить свои
				карты и получите выше хешрейт и меньше потребление электричества, что,
				разумеется, приведет к повышению прибыли. Но если вам надо «быстро»,
				«сразу», «лень вникать» — то используйте наши таблицы. Для настройки
				разгона видеокарт установите MSI Afterburner, если у вас еще его нет.
			</p>
			<p>
				Мы выяснили идеальные настройки видеокарт Nvidia и AMD для разгона и
				собрали их в таблице. В столбцах указаны модели устройств, частота ядра,
				частота памяти, лимит мощности и ожидаемый хешрейт. Для начала приводим
				данные для видеокарт Nvidia.
			</p>
			<Image
				width="890"
				height="1500"
				src="/img/png/nvidia.png"
				alt=""
				style={{ display: 'block', margin: 'auto', borderRadius: 15 }}
			/>
			<p>И данные по AMD.</p>
			<Image
				width="890"
				height="1500"
				src="/img/png/amd.png"
				alt=""
				style={{ display: 'block', margin: 'auto', borderRadius: 15 }}
			/>
			<p>
				Решились вникнуть в процесс разгона и настройки видеокарт для майнинга,
				тогда читайте дальше.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Как разгонять видеокарту при майнинге Эфириума"
			/>
			<p>
				Важный момент: при разгоне и тестах всегда следите за температурой
				видеокарты. При безопасном майнинге Эфира температура ядра не должна
				подниматься выше 65 градусов. Выше температура — на свой страх и риск.
			</p>
			<p>Базовая настройка видеокарт под Эфир достаточно проста.</p>
			<ol>
				<li>
					в первую очередь мы определяем, на какой частоте максимально будет
					работать <strong>память</strong>, с шагом +25 МГц. Находим ту, на
					которой начинает слетать — то есть перезагружаться — драйвер
					видеокарты, и отступаем от неё 50 МГц вниз в стабильную область.
				</li>
				<li>
					находим <strong>напряжение ядра</strong>, при котором нас устраивает
					энергопотребление карты. Чем ниже напряжение, тем меньше «кушает»
					карта, но тем ниже максимальная скорость. Зависимость
					непропорциональная, ведь обычно при убавлении потребления на 20-25% от
					номинала, скорость падает всего на 10-15%.
				</li>
				<li>
					находим максимальную стабильную <strong>частоту ядра</strong>
					(также по +25 Мгц) и отступаем от неё вниз 25 МГц.
				</li>
			</ol>
			<p>
				Более тонкая настройка даст нам 2-6% дополнительной скорости или 2-4%
				энергоэффективности. Мы не будем подробно останавливаться на ней в этой
				статье.
			</p>
			<p>
				Вышеприведённая инструкция хорошо подходит для видеокарт производителя
				AMD. Для видеокарт Nvidia настройка высокоэффективного майнинга чуть
				сложнее, поэтому остановимся отдельно на каждой серии.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Майнинг с Nvidia на Windows (режимы P2 и P0)"
			/>
			<p>
				Важным моментом при работе с картами Nvidia под управлением Windows
				является то, что изначально память видеокарт на штатных частотах
				допускает небольшое число ошибок, которые не критичны при отрисовке
				изображений в играх, но могут быть критичны при точных расчетах. Поэтому
				для работы систем CUDA инженеры Nvidia предусмотрели особый режим с
				пониженной частотой памяти (P2).
			</p>
			<p>
				Переход карт в этот режим осуществляется автоматически, однако майнеры
				часто хотят получить максимальный хешрейт и серьёзно повышают частоту
				памяти до значений +700, +1000 и даже выше. В результате складываются
				два фактора — понижение частоты режимом P2 и повышение майнером. При
				этом майнер успешно работает, но при выключении майнера режим P2
				переключается обратно, а плюс частоты выставленный вручную остаётся. Это
				приводит к частотам, которые карты не могут держать и как следствие —
				вылет драйвера при выключении или перезапуске майнинг-программы.
			</p>
			<p>
				Важно: смена P2 на P0 не даёт прироста максимальной скорости, а только
				увеличивает стабильность при включении/выключении/перезапуске майнера.
			</p>
			<p>
				Правильнее всего отключить режим P2 для CUDA — это делается через
				утилиту nvInspector , точнее её подпрограмму nvProfileInspector. Находим
				параметр CUDA — Force P2 state, выключаем его, потом запускаем майнер.
			</p>
			<p>
				Ещё один важный момент: параметр Force P2 state восстанавливается при
				установке в систему любой новой карты Nvidia, не забывайте его
				перепроверять.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Майнинг эфира на архитектуре Pascal (серия GTX 10xx)"
			/>
			<p>
				К сожалению, карты серии 10хх не были разработаны специально под
				майнинг, поэтому в конце 2020 году майнеры серии 10хх столкнулись с
				некоторым падением скорости при майнинге Эфира. Для сохранения скорости
				приходилось поднимать энергопотребление, что существенно изменяло
				энергоэффективность.
			</p>
			<p>
				Важно: на серии Nvidia GTX 10хх с каждой следующей эпохой Эфириума — а
				они меняются раз в четыре дня — энергопотребление видеокарт будет
				чуть-чуть расти вплоть до максимального лимита мощности видеокарты.
				Ориентировочно через 1.5 года карты начнут упираться в лимит мощности.
			</p>
			<p>
				Обратите внимание на то, что Нвидиа решила не обновлять драйвер Nvidia
				для карт 10хх для системы Windows 7, поэтому на этой системе невозможен
				эффективный майнинг Эфира на видеокартах 10хх (видеокарты 16хх, 20хх и
				30хх уже не имеют этой проблемы). Для майнинга Эфира на серии 10хх
				используйте Windows 10 или Rave OS.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Разгон майнинга Эфириума на Nvidia GeForce GTX 1060 (6 ГБ), 1070 и 1070ti"
			/>
			<p>
				Эти карты работают на типе памяти GDDR5, алгоритм разгона для них
				одинаковый.
			</p>
			<ol>
				<li>
					Включаем майнер без разгона. Потихоньку поднимаем частоту памяти (по
					+50 МГц). Находим ту частоту, на которой начинает слетать —
					перезагружаться — драйвер видеокарты, отступаем от неё 50 МГц вниз в
					стабильную область.
				</li>
				<li>
					начинаем по чуть-чуть снижать PL — где-то по 1%. Видеокарта начнёт
					потреблять меньше, и температура будет снижаться, в какой-то момент
					скорость начнёт падать. Останавливаемся на 5% падения скорости.
				</li>
				<li>
					поднимаем по чуть-чуть частоту ядра, находим ту частоту, на которой
					начинает слетать драйвер видеокарты, и отступаем от неё 25 МГц вниз в
					стабильную область.
				</li>
			</ol>
			<p>
				Скорость, потерянная в пункте №2, должна полностью вернуться. Если
				вернулась не полностью, можно чуть увеличить Power Limit, однако при
				этом вырастет и энергопотребление карты.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Майнинг Эфириума на Nvidia GeForce GTX 1080 и 1080ti"
			/>
			<p>
				Карты 1080 и 1080ti имеют высокотайминговую быструю память GDDR5X,
				которая изначально существенно проигрывала GDDR5 памяти в процессе
				майнинга Эфира. Однако достаточно быстро была выпущена таблетка
				ETHlargementPill-r2, снижающая тайминги для этого типа памяти, после
				чего они стали очень эффективны для Эфира.
			</p>
			<p>
				Таблетка делает работу памяти менее стабильной и снижает возможный
				максимум разгона. Для многих ранних ревизий карт модели GTX 1080 (Rev.A)
				таблетка нестабильна уже на штатных частотах, поэтому
				<em>
					для стабильной работы таких карт частоту памяти видеокарты приходится
					понижать
				</em>
				.
			</p>
			<p>
				Если даже понижение частоты не привело к стабильной работе
				программы-майнера, то для таких карт вместо таблетки необходимо
				использовать мягкий аналог. Это параметр —mt в майнере t-rex, который
				изменяется от 0 до 6. Чем выше этот параметр тем агрессивнее снижение
				таймингов — но и ниже стабильность.
			</p>
			<p>
				После успешной активации таблетки или подбора параметра —mt разгон этих
				карт аналогичен картам 1060 и 1070.
			</p>
			<Heading
				style={{ textAlign: 'center' }}
				title="Майнинг Ethereum на Nvidia GeForce GTX 16хх и 20хх"
			/>
			<p>
				Эти карты не имеют проблем с размещением в памяти видеокарты больших
				объёмов данных и при этом имеют очень мощные ядра.
			</p>
			<p>Алгоритм разгона очень прост:</p>
			<ol>
				<li>Снижаем PL до минимума.</li>
				<li>
					Потихоньку поднимаем частоту памяти (по +50 МГц). Находим ту частоту,
					на которой начинает слетать драйвер видеокарты и отступаем от неё 50
					МГц вниз в стабильную область.
				</li>
				<li>Проверяем, что повышение PL не приводит к росту хешрейта.</li>
			</ol>
			<p>
				Если повышение PL увеличивает хешрейт — это актуально для некоторых
				моделей 2080 и 2080ti — то находим, до какого хешрейта можно поднять PL.
				Затем делаем следующие шаги.
			</p>
			<ul>
				<li>
					Начинаем по чуть-чуть снижать PL — где-то по 1%. В итоге видеокарта
					начнёт потреблять меньше, и температура будет снижаться, причём в
					какой-то момент скорость начнёт падать. Останавливаемся на 5% падения
					скорости.
				</li>
				<li>
					Поднимаем по чуть-чуть частоту ядра, находим ту частоту, на которой
					начинает слетать драйвер видеокарты и отступаем от неё 25 МГц вниз в
					стабильную область.
				</li>
			</ul>
			<div>
				<p>
					Скорость, потерянная в пункте №2, должна полностью вернуться. Если
					вернулась не полностью, можно чуть увеличить Power Limit, но при этом
					вырастет и энергопотребление карты.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Майнинг ETH на Nvidia GeForce RTX 30хх"
				/>
				<p>
					Карты 3070, 3080 и 3090 — самые капризные из всех NVIDIA карт по
					разгону, на них остановимся подробно. Сразу отметим, что разгон 3060 и
					3060ti аналогичен разгону 20хх серии.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Майнинг Эфириума на Nvidia GeForce RTX 3070"
				/>
				<p>
					При разгоне 3070 — как и всех старших карт 30хх серии — важно
					чувствовать, чего не хватает карте. Карта стабильно даёт 60 MH/s, при
					разгоне памяти можно стабильно получить 63-64 MH/s. У карты очень
					мощное ядро, не особо необходимое для майнинга эфира: ему достаточно
					700-800 МГц. Поэтому прожорливость карты смело можно и нужно
					ограничивать.
				</p>
				<p>
					Разгон 3070 не сложен: в первую очередь разгоняем память до
					стабильного максимума, потом снижаем PL.
				</p>
				<ol>
					<li>
						Потихоньку поднимаем частоту памяти (по +50 МГц). Находим ту
						частоту, на которой начинает слетать драйвер видеокарты, отступаем
						от неё 50 МГц вниз в стабильную область. Итоговая эффективная
						частота памяти по MSI Afterburner должна составлять 8100-8400 МГц.
					</li>
					<li>
						Начинаем снижать PL по 1%, видеокарта начнёт потреблять меньше и
						температура будет снижаться. В какой-то момент скорость начнёт
						падать, возвращаем назад в плюс пару процентов.
					</li>
				</ol>
				<p>
					В какой-то момент при понижении PL частота ядра может начать
					"прыгать", периодически сваливаясь ниже 1 ГГц и через секунду
					возвращаясь обратно. Это значит, что карте не хватает лимита мощности.
				</p>
				<p>
					Этот эффект называется «тротлинг» (от английского глагола
					«тормозить»). Важный момент: при этом майнеры t-rex и другие могут
					показывать высокую скорость, но эффективная будет на 4-5 MH/s ниже
					отображаемой.
				</p>
				<p>
					При нагреве карты и разгоне вентиляторов необходимо чуть повысить PL,
					поскольку у карт Nvidia потребление вентиляторов тоже учитывается в
					PL, и ядру карты может начать не хватать оставшейся энергии. Это
					связано с тем, что у карт Nvidia потребление вентиляторов тоже
					учитывается в PL и ядру карты может начать не хватать оставшейся
					энергии.
				</p>
				<p>
					<strong>
						Вывод: Не перезажимайте PL. Нормальное потребление 3070 при майнинге
						— 130 Ватт на 63 MH/s скорости.
					</strong>
				</p>
				<p>
					Лучшие результаты можно получить на Windows 7 при фиксации напряжения
					ядра в районе 713-725 мВ и понижении частоты ядра. На хорошей памяти
					получаем потребление 121 Вт при 64.6 MH/s скорости. Это t-rex без
					учета devfee.
				</p>
				<p>
					Если использовать фиксацию режима в nvidia инспекторе (команда
					-forcePState:0,0), то можно получить 61 MH/s при потреблении 107 Вт
					или 570 MH/s на 1кВт мощности. Но в этом случае после перезагрузки
					придется сначала восстанавливать режим работы, а только потом включать
					майнинг, иначе драйвер будет циклически слетать. В данном случае
					экономия 10 Вт с карты нецелесообразна.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Майнинг Эфириума на Nvidia GeForce RTX 3080"
				/>
				<p>
					При разгоне 3080 — как и всех старших карт 30хх серии — важно
					чувствовать, чего не хватает карте. У карты 3080 очень мощное ядро,
					которое избыточно для майнинга эфира, поэтому в первую очередь
					максимально ограничиваем ядро — без тротлинга — а уж потом разгоняем
					память.
				</p>
				<p>Разгон на Windows.</p>
				<ol>
					<li>
						Снижаем частоту памяти до минимума. Используя MSI Afterburner,
						фиксируем напряжение ядра на 750 мВ, сохраняем, проверяем частоту
						памяти. Она должна быть в районе 7500 МГц.
					</li>
					<li>
						Начинаем фиксировать напряжения в нижних точках (743 мВ — 725 мВ —
						713 мВ — 700 мВ). Ищем точку, при которой частота памяти упадёт до
						5000 МГц (режим P3), отступаем от неё выше на 1 шаг. Удостоверяемся,
						что частота памяти снова выше 7000 МГц.
					</li>
					<li>Снижаем ядро до минимума. Включаем майнинг.</li>
					<li>Потихоньку поднимаем частоту памяти по +50 МГц.</li>
				</ol>
				<p>Дальше два варианта.</p>
				<ol>
					<li>
						Либо находим ту частоту, на которой начинает слетать драйвер
						видеокарты, отступаем от неё 50 МГц вниз в стабильную область.
						<p>
							После этого можно чуть-чуть прибавить ядро и проверить, что
							скорость от этого не растёт. Если скорость растёт — тогда
							прибавляем ядро, главное не дойти до следующего варианта.
						</p>
					</li>
					<li>
						Находим точку, после которой ядро начинает «скакать» и проваливаться
						ниже 1 ГГц. Увы, у нас карта со слабым питанием, останавливаемся на
						этой точке и довольствуемся текущей скоростью выше 90 MH/s.
					</li>
				</ol>
				<Heading
					style={{ textAlign: 'center' }}
					title="Майнинг эфира на Nvidia GeForce RTX 3090"
				/>
				<p>
					Принцип разгона 3090 никак не отличается от 3080, просто надо
					изначально предполагать, что 3090 ведёт себя как переразогнанная 3080
					со слабым питанием.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Разгон видеокарт AMD RX 5ххх и 6ххх для майнинга"
				/>
				<p>
					Отдельно обсудим разгон новых и весьма эффективных серий от
					производителя AMD. В отличие от карт NVidia, у этих карт нет
					специальных режимов или «умных режимов» работы, жестко прописанных в
					BIOS видеокарты.
				</p>
				<p>
					Поэтому использование Windows ни коим образом не помогает добиться
					лучших результатов по скорости, а даже наоборот — снижает
					стабильность. Неудивительно, что подавляющее число «красных» майнеров
					(по цвету логотипа AMD) предпочитают более стабильные готовые системы
					на базе OS Linux, хорошим примером которых является Rave OS.
				</p>
				<p>С использованием таких систем разгон карт очень прост:</p>
				<ol>
					<li>Разгоняем память на 900+ МГц</li>
					<li>ставим ядро на 1350-1375 МГц</li>
					<li>
						аккуратно с шагом 5 снижаем вольтаж ядра, пока оно стабильно (до 800
						мВ смело, ниже в зависимости от карты)
					</li>
					<li>
						снижаем вольтаж памяти (до 800 смело, ниже проверяем стабильность)
					</li>
				</ol>
				<p>
					В итоге получаем максимальный хешрейт при минимальном
					энергопотреблении.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Майнинг Nvidia на алгоритме Kawpow"
				/>
				<p>
					Алгоритм Kawpow, основной валютой на котором является RVN, достаточно
					ярко ворвался в майнинг. Для иллюстрации роста популярности
					криптовалюты приводим график хешрейта Ravencoin на пуле 2Miners: за
					месяц показатель вырос приблизительно в пять раз.
				</p>
				<p>
					В то же время курс RVN прыгнул более чем на 500 процентов за тридцать
					дней. 20 февраля 2023 года он установил рекорд на уровне 28.5 цента.
				</p>
				<p>
					Алгоритм до сих пор работает даже с видеокартами с 3 ГБ памяти , он не
					капризный (причём многие капризные карты на других алгоритмах уверенно
					работают на kawpow), а скорость неплохо коррелирует с уровнем PL карт.
					Наконец, монета RVN есть на многих крупных биржах .
				</p>
				<p>
					По совокупности факторов — этот алгоритм уверенно занимает второе
					место по значимости и доходности после Ethash для майнинга на
					видеокартах.
				</p>
				<p>
					Для cистемы Windows 10 - необходимы видеокарты с 4 ГБ и больше памяти.
					Для cистемы Windows 7 и Rave OS пока достаточно 3 ГБ памяти на карте.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Разгон видеокарт для алгоритма Kawpow"
				/>
				<p>Настройка видеокарт карт под KAWPOW достаточно проста.</p>
				<ol>
					<li>
						в первую очередь мы определяем, на какой частоте максимально будет
						работать <strong>память</strong>, с шагом +25 МГц. Находим ту, на
						которой начинает слетать драйвер видеокарты, и отступаем от неё 50
						МГц вниз в стабильную область.
					</li>
					<li>
						находим <strong>напряжение ядра</strong>
						при котором нас устраивает энергопотребление карты. Чем ниже
						напряжение, тем меньше «кушает» карта, при этом тем ниже
						максимальная скорость. Зависимость непропорциональная, обычно при
						убавлении потребления на 25-35% от номинала скорость падает всего на
						15-20%. Это даёт нам уникальные возможности автоматического разгона
						видеокарт по времени для многотарифных счетчиков.
					</li>
					<li>
						находим максимальную стабильную <strong>частоту ядра</strong>— также
						вверх по +25 Мгц — и отступаем от неё вниз 25 МГц.
					</li>
				</ol>
				<p>
					Более тонкая настройка даст нам 2-6% дополнительной скорости или 2-4%
					энергоэффективности. Поэтому мы не будем на ней подробно
					останавливаться в этой статье.
				</p>
				<Heading
					style={{ textAlign: 'center' }}
					title="Энергоэффективность в майнинге и её значимость. Выбор режима работы"
				/>
				<p>
					Все видеокарты могут работать в экономичном режиме, однако их также
					можно максимально разогнать для получения более высоких значений
					хешрейта. Разумеется, при этом будет страдать энергоэффективность
					майнинга.
				</p>
				<p>
					Не все фермы уверенно работают со всеми алгоритмами. Поэтому каждому
					серьёзному майнеру необходимо самостоятельно проверить работу своих
					карт в минимуме и в максимуме, после чего выбрать для них оптимальный
					режим, исходя из температуры эксплуатации и стоимости электроэнергии.
				</p>
				<p>
					Полученные результаты можно сохранить в виде готовых ссылок на
					<a href="https://2cryptocalc.com/ru">калькулятор 2Cryptocalc</a>,
					который позволит всего в несколько кликов оценить, насколько выбранный
					вами алгоритм лучше или хуже аналогов по текущей прибыльности майнинга
					именно для ваших ферм.
				</p>
				<p>
					Стоимость электроэнергии и текущая прибыльность являются ключевым
					факторами выбора алгоритма и режима работы фермы.
				</p>
			</div>
		</div>
	)
}

export default Razgon
