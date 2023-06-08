import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header/Header";
import NavBar from "@/components/Layout/NavBar/NavBar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
