import clsx from 'clsx';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { getTimeString } from '@/utils/getTimeString';
import { createPhoneNumber } from '@/utils/createPhoneNumber';
import { CALL_STATUS, CALL_ERRORS } from '@/constant/api_status';

import styles from "./TableData.module.scss";

const TableData = (props) => {
  const TIME = 60;
  const { in_out, date, person_avatar, from_number, source, errors = [], time, status } = props;
  const duration = `${Math.floor(time / TIME).toString().padStart(2, '0')}:${(time - Math.floor(time / TIME) * TIME).toString().padStart(2, '0')}`;

  return (
    <tr className={styles.head}>
      <td>
        {in_out === ""
          ? <OpenInFullIcon className={clsx({
            [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
          })} />
          : in_out === 1
            ? <CallMadeIcon className={clsx({
              [styles["svg--green"]]: status === CALL_STATUS.SUCCESS,
              [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
            })} />
            : <CallReceivedIcon className={clsx({
              [styles["svg--blue"]]: status === CALL_STATUS.SUCCESS,
              [styles["svg--fail"]]: status === CALL_STATUS.FAIL,
            })} />
        }
      </td>
      <td>
        {getTimeString(date)}
      </td>
      <td>
        <img width="32px" height="32px" src={person_avatar} alt="avatar" />
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
