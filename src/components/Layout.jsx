import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer' // Добавьте этот импорт

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Мобильное меню как drawer */}
      <div className="drawer lg:drawer-open flex-1">
        <input 
          id="sidebar-drawer" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={sidebarOpen}
          onChange={(e) => setSidebarOpen(e.target.checked)}
        />
        
        {/* Основной контент */}
        <div className="drawer-content flex flex-col flex-1">
          <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
          
          <div className="flex flex-1">
            {/* Боковое меню для десктопа - ВНЕ drawer */}
            <aside className="hidden lg:block w-64 bg-base-200 p-4 sticky top-0 h-[calc(100vh-64px)] overflow-y-auto">
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </aside>
            
            {/* Основной контент */}
            <main className="flex-1 p-4 lg:p-6 w-full">
              <Outlet />
            </main>
          </div>
        </div>
        
        {/* Мобильное боковое меню (только для мобильных) */}
        <div className="drawer-side z-50 lg:hidden">
          <label 
            htmlFor="sidebar-drawer" 
            aria-label="close sidebar" 
            className="drawer-overlay"
          ></label>
          <div className="bg-base-200 min-h-full w-80 p-4 overflow-y-auto">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      </div>
      
      {/* Добавьте Footer здесь */}
      <Footer />
    </div>
  )
}