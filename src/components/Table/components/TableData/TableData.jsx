import clsx from 'clsx';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

import { getTimeString } from '@/utils/getTimeString';
import { createPhoneNumber } from '@/utils/createPhoneNumber';
import { stringZeroStart } from '@/utils/stringZeroStart';

import { CALL_STATUS, CALL_ERRORS } from '@/constant/api_status';

import styles from "./TableData.module.scss";

const TableData = (props) => {
  const TIME = 60;
  const { in_out, date, person_avatar, from_number, source, errors = [], time, status } = props;
  const duration = `${stringZeroStart(Math.floor(time / TIME))}:${stringZeroStart((time - Math.floor(time / TIME) * TIME))}`;

  return (
    <tr className={styles.head}>
      <td>
        {in_out === ""
          ? <OpenInFullIcon className={clsx({
            [styles.svg]: true,
            [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
          })} />
          : in_out === 1
            ? <CallMadeIcon className={clsx({
              [styles.svg]: true,
              [styles["svg--green"]]: status === CALL_STATUS.SUCCESS,
              [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
            })} />
            : <CallReceivedIcon className={clsx({
              [styles.svg]: true,
              [styles["svg--blue"]]: status === CALL_STATUS.SUCCESS,
              [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
            })} />
        }
      </td>
      <td>
        {getTimeString(date)}
      </td>
      <td>
        <img className={styles.avatar} src={!!person_avatar ? person_avatar : 'https://lk.skilla.ru/img/noavatar.jpg'} alt="avatar" />
      </td>
      <td>{createPhoneNumber(from_number)}</td>
      <td className={styles.source}>{source}</td>
      <td>
        {errors.map((it, i, arr) => {
          return (
            <span
              className={clsx({
                [styles["errors--noerrors"]]: it === CALL_ERRORS.NOERRORS,
                [styles["errors--noscript"]]: it === CALL_ERRORS.NOSCRIPT,
              })}
              key={it}
            >
              {it}
              {i + 1 === arr.length ? "" : ", "}
            </span>
          )
        })}
      </td>
      <td className={styles["text-right"]}>{status === CALL_STATUS.FAIL ? '' : duration}</td>
    </tr>
  )
}

export default TableData
