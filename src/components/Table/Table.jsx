import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPeriod } from '@/store/slices/calls/callsSlice';
import { TABLE_PERIOD } from '@/constant/table_period';

import { fetchCalls } from "@/store/slices/calls/callsSlice";

import Balance from "@/components/Balance/Balance"
import DateComponent from "./components/Date/Date";
import Setting from "./components/Setting/Setting";
import TableData from "./components/TableData/TableData";
import Title from "./components/Title/Title";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { FETCH_STATUS } from "@/constant/fetch_status";

import styles from "./Table.module.scss";

function hashCalls(dateArray) {
  const result = {};
  for (const it of dateArray) {
    const { date } = it;
    const currentDay = new Date(date);
    currentDay.setHours(0, 0, 0, 0);
    if (!result[currentDay]) {
      result[currentDay] = [it];
    } else {
      result[currentDay].push(it);
    }
  }
  return result;
};

const Table = () => {
  const dispatch = useDispatch();
  const { status, periodStart, periodEnd, list } = useSelector(state => state.calls);
  const currentList = list.filter(it => {
    return (new Date(periodEnd) - new Date(it.date) >= 0 && new Date(it.date) - new Date(periodStart) > 0)
  });
  const hash = hashCalls(currentList);
  useEffect(() => {
    if (status !== FETCH_STATUS.fulfilled) {
      dispatch(fetchCalls());
    };
  }, []);
  useEffect(() => {
    dispatch(setPeriod(TABLE_PERIOD.THREE_DAY))
  }, []);

  if (status !== FETCH_STATUS.fulfilled) return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );

  return (
    <article className={styles.container}>
      <header>
        <div className={styles.up}>
          <Balance />
          <DateComponent />
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
          {!!currentList.length
            ? Object.keys(hash).map((hashKey, i) => {
              return (
                <Fragment key={hashKey}>
                  {i !== 0 && <Title title={hashKey} badge={hash[hashKey].length} />}
                  {hash[hashKey].map(it => {
                    return (
                      <TableData key={it.id} {...it} />
                    )
                  })}
                </Fragment>
              )
            })
            : <Title title="В данном диапазоне нет звонков" />
          }
        </tbody>
      </table>
    </article>
  )
};

export default Table;
