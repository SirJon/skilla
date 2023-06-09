import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCalls } from "@/store/slices/calls/callsSlice";

import Balance from "@/components/Balance/Balance"
import Date from "./components/Date/Date";
import Setting from "./components/Setting/Setting";
import TableData from "./components/TableData/TableData";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { FETCH_STATUS } from "@/constant/fetch_status";

import styles from "./Table.module.scss";

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCalls())
  }, []);

  const { calls, status } = useSelector(state => state.calls);
  if (status !== FETCH_STATUS.fulfilled)  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );

  return (
    <article className={styles.container}>
      <header>
        <div className={styles.up}>
          <Balance />
          <Date />
        </div>
        <div>
          <Setting />
        </div>
      </header>
      <table className={styles.table}>
        <thead className={styles["table__header"]}>
          <tr className={styles["table__head"]}>
            <td>Тип</td>
            <td>Время</td>
            <td>Сотрудник</td>
            <td>Звонок</td>
            <td>Источник</td>
            <td>Оценка</td>
            <td className={styles["text-right"]}>Длительность</td>
          </tr>
        </thead>
        <tbody className={styles["table__body"]}>
          {calls.map(it => (
            <TableData key={it.id} {...it} />
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Table
