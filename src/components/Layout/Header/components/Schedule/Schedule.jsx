import clsx from "clsx";

import styles from "./Schedule.module.scss";

const Schedule = () => {
  const FULL_PERCENT = 100;
  const green_current = 20;
  const green_full = 30;
  const yellowPercent = 40;
  const redPercent = 67;
  const greenPercent = green_current / green_full * FULL_PERCENT;

  return (
    <ul className={styles.list}>
      <li className={clsx(styles["item--schedule"], styles["item--green"])}>
        <p className={styles.paragraph}>
          <span>Новые звонки </span>
          <span className={styles["span--color"]}>{green_current} из {green_full} шт</span>
        </p>
        <div className={styles.schedule}>
          <div
            style={{ width: `${greenPercent}%` }}
            className={clsx({
              [styles.line]: true,
              [styles["line--full"]]: FULL_PERCENT === greenPercent,
            })}
          />
        </div>
      </li>
      <li className={clsx(styles["item--schedule"], styles["item--yellow"])}>
        <p className={styles.paragraph}>
          <span>Качество разговоров </span>
          <span className={styles["span--color"]}>{yellowPercent}%</span>
        </p>
        <div className={styles.schedule}>
          <div
            style={{ width: `${yellowPercent}%` }}
            className={clsx({
              [styles.line]: true,
              [styles["line--full"]]: FULL_PERCENT === yellowPercent,
            })}
          />
        </div>
      </li>
      <li className={clsx(styles["item--schedule"], styles["item--red"])}>
        <p className={styles.paragraph}>
          <span>Конверсия в заказ </span>
          <span className={styles["span--color"]}>{redPercent}%</span>
        </p>
        <div className={styles.schedule}>
          <div
            style={{ width: `${redPercent}%` }}
            className={clsx({
              [styles.line]: true,
              [styles["line--full"]]: FULL_PERCENT === redPercent,
            })}
          />
        </div>
      </li>
    </ul>
  )
}

export default Schedule;
