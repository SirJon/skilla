import sprite from "@/assets/svg/sprite.svg";

const NavBar = () => {
  return (
    <section>
      {/* <svg className="order__svg">
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg> */}
      <nav>
        <ul>
          <li className="item">
            {/* svg */}
            <span>Итоги</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Заказы</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Сообщения</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Звонки</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Контрагенты</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Документы</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Исполнители</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Отчеты</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>База знаний</span>
          </li>
          <li className="item">
            {/* svg */}
            <span>Настройки</span>
          </li>
        </ul>
      </nav>
      <button>Добавить заказ</button>
      <button>Оплата</button>
    </section>
  )
};

export default NavBar;
