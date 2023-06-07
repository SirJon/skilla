import { getDate } from "@/utils/getDate";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <span>{getDate()}</span>
        </li>
        <li>
          <p>
            <span>Новые звонки </span>
            <span>20 из 30 шт</span>
          </p>
          <div>
            <div></div>
          </div>
        </li>
        <li>
          <p>
            <span>Качество разговоров </span>
            <span>40%</span>
          </p>
          <div>
            <div></div>
          </div>
        </li>
        <li>
          <p>
            <span>Конверсия в заказ </span>
            <span>67%</span>
          </p>
          <div>
            <div></div>
          </div>
        </li>
        <li>
          <input type="search" />
        </li>
        <li>
          <span>ИП Сидорова Александра Михайловна</span>
          {/* svg */}
        </li>
        <li>
          <img width="30px" height="30px" src="https://placebeard.it/640x360" alt="" />
          {/* svg */}
        </li>
      </ul>
    </header>
  )
}

export default Header
