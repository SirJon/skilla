import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

import sprite from "@/assets/svg/sprite.svg";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <section className={styles["nav-bar"]}>
      <svg className={styles["svg--logo"]}>
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#result`}></use>
              </svg>
              <span>Итоги</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#orders`}></use>
              </svg>
              <span>Заказы</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#mail`}></use>
              </svg>
              <span>Сообщения</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={clsx({
                [styles.link]: true,
                [styles["link--activ"]]: pathname === "/calls",
                [styles["link--info"]]: true,
              })}
              to="/calls"
            >
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#calls`}></use>
              </svg>
              <span>Звонки</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#contacts`}></use>
              </svg>
              <span>Контрагенты</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#documents`}></use>
              </svg>
              <span>Документы</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#performers`}></use>
              </svg>
              <span>Исполнители</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#report`}></use>
              </svg>
              <span>Отчеты</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#library`}></use>
              </svg>
              <span>База знаний</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={clsx({
              [styles.link]: true,
              [styles["link--activ"]]: false,
              [styles["link--info"]]: false,
            })}>
              <svg className={styles.svg}>
                <use xlinkHref={`${sprite}#settings`}></use>
              </svg>
              <span>Настройки</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button className={clsx(styles.button, styles["button--plus"])}>
        <span className={styles["span--button"]}>Добавить заказ</span>
        <svg className={styles["svg--button"]}>
          <use xlinkHref={`${sprite}#plus`}></use>
        </svg>
      </button>
      <button className={clsx(styles.button, styles["button--info"])}>
        <span className={styles["span--button"]}>Оплата</span>
        <svg className={styles["svg--button"]}>
          <use xlinkHref={`${sprite}#info`}></use>
        </svg>
      </button>
    </section>
  )
};

export default NavBar;
