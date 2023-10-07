// TabLinks.js
import React from 'react';
import './TabLinks.css';
import TabSeparator from './TabSeparator'; 

function TabLinks() {
  return (
    <div className="tab-links">
      <nav>
        <ul>
          <li><a href="/home">หน้าแรก</a></li>
          <TabSeparator /> {/* เพิ่ม TabSeparator ระหว่างแท็บ */}
          <li><a href="/Dentral">dentral</a></li>
          <TabSeparator /> {/* เพิ่ม TabSeparator ระหว่างแท็บ */}
          <li><a href="/Card">ชำระเงิน</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TabLinks;
