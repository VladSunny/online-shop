import { Link } from "react-router-dom";

export default function Header({ onMenuToggle }) {
  return (
    <header className="navbar bg-primary text-primary-content sticky top-0 z-30">
      <div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost" onClick={onMenuToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          🍓 BerryShop
        </Link>
      </div>

      <nav className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/LK">Личный кабинет</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/fruits">Фрукты</Link>
          </li>
          <li>
            <Link to="/berries">Ягоды</Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-2">
              🛒 Корзина
              <span className="badge badge-secondary">0</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
