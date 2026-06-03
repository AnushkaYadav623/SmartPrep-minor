import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/upload': return 'Materials';
      case '/notes': return 'Notes';
      case '/quiz': return 'Quiz';
      case '/schedule': return 'Schedule';
      case '/ai-tutor': return 'AI Tutor';
      default: return 'SmartPrep';
    }
  };

  return (
    <header className="topnav-container">
      <h1 className="page-title">{getPageTitle()}</h1>
      
      <div className="topnav-actions">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">Student</span>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
