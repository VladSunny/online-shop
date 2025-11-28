import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex h-screen flex-1">
        {/* Боковое меню для десктопа - убрали container */}
        <aside className="hidden lg:block w-64 bg-base-200 p-4 sticky top-0 h-screen overflow-y-auto">
          <Sidebar />
        </aside>
        
        {/* Мобильное меню */}
        <div className={`drawer lg:hidden ${sidebarOpen ? 'drawer-open' : ''}`}>
          <input 
            id="sidebar-drawer" 
            type="checkbox" 
            className="drawer-toggle" 
            checked={sidebarOpen}
            onChange={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="drawer-side z-50">
            <label 
              htmlFor="sidebar-drawer" 
              className="drawer-overlay"
              onClick={() => setSidebarOpen(false)}
            ></label>
            <div className="bg-base-200 w-80 h-full p-4 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
        
        {/* Основной контент - убрали container */}
        <main className="flex-1 p-4 lg:p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}