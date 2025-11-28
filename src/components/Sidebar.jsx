import { NavLink } from 'react-router-dom'

export default function Sidebar({ onClose }) {
  const menuItems = [
    { path: '/', label: 'Главная', icon: '🏠' },
    { path: '/products', label: 'Все товары', icon: '📦' },
    { path: '/categories/electronics', label: 'Электроника', icon: '📱' },
    { path: '/categories/clothing', label: 'Одежда', icon: '👕' },
    { path: '/categories/books', label: 'Книги', icon: '📚' },
    { path: '/promotions', label: 'Акции', icon: '🔥' },
    { path: '/favorites', label: 'Избранное', icon: '❤️' },
  ]

  return (
    <div className="space-y-2">
      {/* Кнопка закрытия для мобильных */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Меню</h2>
        <button 
          onClick={onClose}
          className="btn btn-ghost btn-sm"
        >
          ✕
        </button>
      </div>

      <h2 className="text-lg font-bold px-4 py-2 hidden lg:block">Категории</h2>
      <ul className="menu bg-base-200 rounded-box">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 ${isActive ? 'active' : ''}`
              }
              onClick={() => onClose && onClose()} // Закрываем меню на мобильных при клике на ссылку
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      
      {/* Дополнительный раздел */}
      <div className="divider"></div>
      
      <h2 className="text-lg font-bold px-4 py-2">Фильтры</h2>
      <div className="space-y-3 px-4">
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text">В наличии</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text">Со скидкой</span>
          </label>
        </div>
      </div>
    </div>
  )
}