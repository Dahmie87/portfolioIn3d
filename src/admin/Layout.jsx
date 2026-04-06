import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Menu, X, LogOut, Home, FileText, Mail, BarChart3 } from 'lucide-react';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/.admin/login');
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/.admin' },
    { icon: FileText, label: 'Blog Posts', path: '/.admin/blog' },
    { icon: Mail, label: 'Contacts', path: '/.admin/contacts' },
    { icon: BarChart3, label: 'Analytics', path: '/.admin/analytics' },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h1>Portfolio Admin</h1>
          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
              }}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <header className="navbar">
          <div className="navbar-left">
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="navbar-right">
            <span className="user-info">👤 {user?.username || 'Admin'}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
