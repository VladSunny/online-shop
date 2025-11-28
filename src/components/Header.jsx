import { Link } from 'react-router-dom'

export default function Header({ onMenuToggle }) {
  return (
    <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
      {/* Убрали container mx-auto для полной ширины */}
      <div className="w-full px-4">
        {/* Кнопка меню для мобильных */}
        <div className="lg:hidden">
          <button 
            className="btn btn-ghost btn-sm"
            onClick={onMenuToggle}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            🛍️ MyShop
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Товары</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/cart">Корзина</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}