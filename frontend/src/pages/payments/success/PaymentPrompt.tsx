import React from 'react';
import { Button, Result } from 'antd';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
const PaymentPrompt = () => (
  <Result
  title={<span style={{ fontSize: '30px' }}>Receipt awaiting verification</span>}
  subTitle={<span style={{ fontSize: '30px' }}>ใบเสร็จรอการตรวจสอบ</span>}
    extra={[
      <Button type="primary" key="console">
        <Link to="/home">หน้าแรก</Link>
      </Button>,
    <Button key="buy">
      <Link to="/Dentral">Buy again</Link>
    </Button>,]
    }
  />
);
export default PaymentPrompt;