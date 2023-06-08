
import Table from "@/components/Table/Table";

import styles from "./Calls.module.scss";


const Calls = () => {
  return (
    <section className={styles.calls}>
      <h1 className={styles.title}>Звонки</h1>
      <Table />
    </section>
  )
}

export default Calls
