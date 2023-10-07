// Header.js

import React from 'react';
import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li><a href="/member">Member</a></li>
          <li><a href="/logout">Logout</a></li>
          
        </ul>
      </nav>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>09:00-20:00</li>
            <li><a href="/เบอร์">0956639823</a></li>
            <li><a href="/TH_EN">TH/EN</a></li>
            </ul>
        </nav>
    </div>
    </div>
    
  );}

export default Header;
