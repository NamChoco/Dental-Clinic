import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import logo from "./asset/logo.jpg";
import TabLinks from './Components/TabLinks';
import HorizontalLine from './Components/HorizontalLine';
import PaymentPage from './pages/PaymentPage';
import PromptPay from './pages/PromptPay';
import Cards from './pages/Card';
import PaymentPrompt from './pages/PaymentPrompt';
import { Card } from 'antd';
import Dentral from './pages/Dentral';
// import Test1 from './Components/test';

function App() {
    const linkStyle = {
      textDecoration: 'none', // ลบเส้นใต้
      color: 'inherit', // ใช้สีที่เป็นสีเดียวกับข้อความที่อยู่ภายใน
    };

   return (
    
    <Router>
      <div className={"App"}>
        <Header />
        <div className="tab-bar">
          <img src={logo} alt="โลโก้" className="logo" />
        </div>
        <TabLinks />
        <HorizontalLine />
        </div>  
        {/* <Test1 /> */}


        
      <Routes>

          <Route path="/Dentral" element={<Dentral />}> /</Route>
          <Route path="/Card" element={<Cards />} />
          <Route path="/Card/PromptPay" element={<PromptPay />}></Route>
          <Route path="/Card/PaymentPage" element={<PaymentPage />}>  
          </Route>
          <Route path="/Payment/PaymentPrompt" element={<PaymentPrompt />}></Route>
        </Routes>
    </Router>
  );
 }

export default App;