import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, BookOpen, HelpCircle, Calendar, Bot, User } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/upload', label: 'Materials', icon: FileText },
    { path: '/notes', label: 'Notes', icon: BookOpen },
    { path: '/quiz', label: 'Quiz', icon: HelpCircle },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/ai-tutor', label: 'AI Tutor', icon: Bot },
  ];

  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">SP</div>
        <div className="sidebar-logo-text">SmartPrep</div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;