import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from "./Balance.module.scss";

const Balance = () => {
  return (
    <div className={styles.balance}>
      <span className={styles.title}>Баланс:</span>
      &nbsp;
      <span className={styles.price}>272 ₽</span>
      <AddCircleIcon className={styles.svg} />
    </div>
  )
}

export default Balance
