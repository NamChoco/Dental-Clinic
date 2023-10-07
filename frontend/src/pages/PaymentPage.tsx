import React from 'react';
import { Button, Result } from 'antd';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
const PaymentPage = () => (
<Result
  status="success"
  title={<span style={{ fontSize: '50px' }}>Successed!!</span>}
  subTitle={<span style={{ fontSize: '40px' }}>ชำระเงินสำเร็จ</span>}
  extra={[
    <Button type="primary" key="console">
      <Link to="/home">หน้าแรก</Link>
    </Button>,
    <Button key="buy">
      <Link to="/Dentral">Buy again</Link>
    </Button>,
  ]}
/>

);
export default PaymentPage;