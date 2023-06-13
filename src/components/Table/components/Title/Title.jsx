import Badge from '@mui/material/Badge';

import styles from "./Title.module.scss";

const Title = ({ title, badge = 0 }) => {
  return (
    <tr className={styles.head}>
      <td>
        <Badge badgeContent={badge}>
          {title}
        </Badge>
      </td>
    </tr>
  )
}

export default Title;
