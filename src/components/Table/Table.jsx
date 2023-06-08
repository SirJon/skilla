
import Balance from "@/components/Balance/Balance"
import Date from "./components/Date/Date";
import Setting from "./components/Setting/Setting";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <article className={styles.table}>
      <header>
        <div className={styles.up}>
          <Balance />
          <Date />
        </div>
        <div>
          <Setting />
        </div>
      </header>
    </article>
  )
}

export default Table
