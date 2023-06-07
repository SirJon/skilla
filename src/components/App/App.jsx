import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header/Header";
import NavBar from "@/components/Layout/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
