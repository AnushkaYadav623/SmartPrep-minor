<<<<<<< HEAD
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
=======
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
import './TopNav.css';

const TopNav = () => {
  const location = useLocation();
<<<<<<< HEAD
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
=======
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
  
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

<<<<<<< HEAD
  const handleLogout = () => {
    logout();
  };

=======
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
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
        
<<<<<<< HEAD
        <div className="user-profile-container" style={{ position: 'relative' }}>
          <div 
            className="user-profile" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            <div className="avatar">
              <User size={20} />
            </div>
            <span className="user-name">{user?.sub || 'Student'}</span>
          </div>

          {dropdownOpen && (
            <div className="profile-dropdown" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '0.5rem',
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-md)',
              padding: '0.5rem',
              minWidth: '150px',
              zIndex: 10
            }}>
              <button 
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  padding: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  textAlign: 'left'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
=======
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">Student</span>
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
        </div>
      </div>
    </header>
  );
};

export default TopNav;
