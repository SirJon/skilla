
import Dashboard from "./components/Dashboard/Dashboard";
import SearchIcon from '@mui/icons-material/Search';

import styles from "./Setting.module.scss";

const Setting = () => {
  return (
    <div className={styles.setting}>
      <div className={styles.search}>
        <SearchIcon className={styles["svg--search"]}/>
        <input className={styles["input--search"]} type="text" placeholder="Поиск по звонкам" />
      </div>
      <Dashboard title="Все типы" items={['first', 'second']} />
      <Dashboard title="Все сотрудники" items={['first', 'second']} />
      <Dashboard title="Все звонки" items={['first', 'second']} />
      <Dashboard title="Все источники" items={['first', 'second']} />
      <Dashboard title="Все оценки" items={['first', 'second']} />
      <Dashboard title="Все ошибки" items={['first', 'second']} />
    </div>
  )
}

export default Setting
