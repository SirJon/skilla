
import Balance from "@/components/Balance/Balance"
import Date from "./components/Date/Date";
import Setting from "./components/Setting/Setting";
import TableData from "./components/TableData/TableData";

import data from "../../mock/response.json"

import styles from "./Table.module.scss";

const Table = () => {
  const { results } = data;
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
      <table border="1">
        <thead>
          <tr>
            <th>Тип</th>
            <th>Время</th>
            <th>Сотрудник</th>
            <th>Звонок</th>
            <th>Источник</th>
            <th>Оценка</th>
            <th>Длительность</th>
          </tr>
        </thead>
        <tbody>
          {results.map(it => (
            <TableData key={it.id} {...it} />
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Table
