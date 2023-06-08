import clsx from "clsx";
import { getDate } from "@/utils/getDate";
import Schedule from "./components/Schedule/Schedule";
import Search from "./components/Search/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from "./Header.module.scss";


const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <span className={styles.date}>{getDate()}</span>
        <Schedule />
      </section>
      <section className={styles.section}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.user}>
          <span>ИП Сидорова Александра Михайловна</span>
          <KeyboardArrowDownIcon className={styles.svg} />
        </div>
        <div className={clsx(styles.user, styles["user--menu"])}>
          <img className={styles.image} src="https://placebeard.it/640x360" alt="" />
          <KeyboardArrowDownIcon className={styles.svg} />
        </div>
      </section>
    </header>
  )
}

export default Header
