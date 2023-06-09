import Badge from '@mui/material/Badge';
import { stringZeroStart } from '@/utils/stringZeroStart';

import styles from "./Title.module.scss";

const day = (date) => {
  const d = new Date(date);
  return `${stringZeroStart(d.getDate())}.${stringZeroStart(d.getMonth())}.${d.getFullYear()}`
}

const Title = ({ date, badge }) => {
  return (
    <tr className={styles.head}>
      <td>
        <Badge badgeContent={badge}>
          {day(date)}
        </Badge>
      </td>
    </tr>
  )
}

export default Title;
