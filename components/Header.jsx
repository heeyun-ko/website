import React from 'react';
import Link from 'next/link';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="site-title">
          Welcome to Helena's Blog
        </Link>
        <p className="site-description">
          This is a place to archive my portfolios and some kinds of information to share with u guys :)
        </p>
        
        {/* Social Media Links */}
        <div className="social-links">
          <a 
            href="https://www.youtube.com/@helena27_usa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            YouTube
          </a>
          <a 
            href="https://x.com/JOY025683677928" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            X
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; 