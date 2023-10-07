import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  Upload, 
} from "antd";
import TextComponent from '../Components/TextComponent';
import TextCom1 from '../Components/TextCom1';
import Grid from '../Components/Grid';
import TextCom2 from '../Components/TextCom2';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // ปรับเพิ่ม Routes, Route
import Box from '../Components/Box';
import Box2 from '../Components/Box2';
import qr from '../asset/qr.jpg'
import card from '../asset/card.jpg';
import prom from '../asset/prom.jpg';

import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const normFile = (e: { fileList: any; }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const PromptPay = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <TextComponent text="ชำระเงิน" />
      <div>
        <TextCom1 text="วิธีการชำระเงิน" />
      </div>
      <section className='app-section'>
        <div className='app-container'>
          <Grid>
            <Link to="/Card" style={linkStyle}>
              <Box >
                <h1><img src={card} alt="Logo" style={{ width: "20%", borderRadius: "0%" }} /> Card</h1>
              </Box>
            </Link>
            <Link to="/Card/PromptPay" style={linkStyle}>
              <Box2>
                <h1><img src={prom} alt="Logo" style={{ width: "30%", borderRadius: "0%" }} /> PromptPay</h1>
              </Box2>
            </Link>
          </Grid>
        </div>
      </section>

      <div style={{ marginRight: "40px" }}>
        <div className="container">
          <div className="asset">
            <p>
              <h3>รายการ</h3>
              <ul>
                <li>อุดฟัน - 2,000 บาท</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <img src={qr} alt="qr " style={{ width: "15%", marginLeft: "420px", marginTop: "50px", borderRadius: "0%" }} />
      <div style={{ marginLeft: "280px" }}>
        <TextCom2 text={<span><span style={{ color: "black" }}>ชื่อบัญชี : </span><span style={{ color: "blue" }}>ksdentralclinic</span></span>} />
      </div>
      <div style={{ marginLeft: "266px" }}>
        <TextCom2 text={<span><span style={{ color: "black" }}>เลขพร้อมเพย์ : </span><span style={{ color: "blue" }}>0956639823</span></span>} />
      </div>

      <div style={{ marginLeft: "200px", marginTop: "50px" }}>
        <Col xs={11} sm={11} md={15} lg={12} xl={12}>
          <Form.Item
            label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>ใบเสร็จการโอนเงิน</span>}
            name="ใบเสร็จโอนเงิน"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <div style={{ marginLeft: "40px" }}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </div>
          </Form.Item>
        </Col>
      </div>

      <div style={{ marginTop: '-250px' }} >
        <div className="tab-links">
          <nav>
            <ul>
              <li className="payment">ยอดชำระ</li>
              <li className="amount">2,000 บาท</li>
            </ul>
          </nav>
        </div>
      </div>
      <div style={{ marginLeft: '160px', marginTop: '180px' }}>
        <Link to="/Payment/PaymentPrompt">
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '749px', height: '50px', fontSize: '20px' }}
          ><ShoppingCartOutlined style={{ marginRight: '8px', fontSize: '25px' }} />
            ยืนยันการชำระเงิน
          </Button>
        </Link>
      </div>

    </>
  );
};

export default PromptPay;
