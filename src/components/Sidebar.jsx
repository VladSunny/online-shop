import { NavLink } from "react-router-dom";

export default function Sidebar({ onClose }) {
  const menuItems = [
    { path: "/", label: "Главная", icon: "🏠" },
    { path: "/catalog", label: "Каталог", icon: "🛍️" },
    { path: "/fruits", label: "Фрукты", icon: "🍎" },
    { path: "/berries", label: "Ягоды", icon: "🍓" },
  ];

  return (
    <div className="space-y-2">
      <div className="lg:hidden flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Меню</h2>
        <button onClick={onClose} className="btn btn-ghost btn-sm">
          ✕
        </button>
      </div>

      <h2 className="text-lg font-bold px-4 py-2 hidden lg:block">Категории</h2>
      <ul className="menu bg-base-300 rounded-box">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 ${isActive ? "active" : ""}`
              }
              onClick={() => onClose && onClose()}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="divider"></div>
    </div>
  );
}
