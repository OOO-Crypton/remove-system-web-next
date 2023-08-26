import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <picture id="logo">
          <source srcSet="/img/webp/logo.webp" type="image/webp" />
          <img src="/img/png/logo.png" alt="err" height="50" width="150" />
        </picture>
      </Link>
      <nav>
        <ul className={styles.topmenu}>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/fly-lists">Полетные листы</Link>
          </li>
          <li>
            <Link href="/wallets">Кошельки</Link>
          </li>
          <li>
            <Link href="/my-account">Личный кабинет</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
