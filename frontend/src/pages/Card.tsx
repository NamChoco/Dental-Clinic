import React, { useState } from 'react';
import { Input, Button,Form } from 'antd';
import TextComponent from '../Components/TextComponent';
import TextCom1 from '../Components/TextCom1';
import Grid from '../Components/Grid';
import TextCom2 from '../Components/TextCom2';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // ปรับเพิ่ม Routes, Route
import Box from '../Components/Box';
import Box2 from '../Components/Box2';
import card from '../asset/card.jpg';
import prom from '../asset/prom.jpg';
import visa from '../asset/visa.jpg';
import cvc from '../asset/cvc.jpg';
import master from '../asset/master.jpg';
import { ShoppingCartOutlined} from "@ant-design/icons";
const { TextArea } = Input;


const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const Card = () => {
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
              <Box2>
                <h1><img src={card} alt="Logo" style={{ width: "20%", borderRadius: "0%" }} /> Card</h1>
              </Box2>
            </Link>
            <Link to="/Card/PromptPay" style={linkStyle}>
              <Box>
                <h1><img src={prom} alt="Logo" style={{ width: "30%", borderRadius: "0%" }} /> PromptPay</h1>
              </Box>
            </Link>
          </Grid>
        </div>
      </section>

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
      <TextCom2 text="หมายเลขบัตร" />
      <div style={{ marginLeft: '160px', display: 'flex', alignItems: 'center' }}>
        <TextArea
          style={{ width: '749px' }}
          placeholder="1234 1234 1234"
          
          name="Numbercard"
          autoSize={{
            minRows: 1.5,
            maxRows: 5,
          }}
          
        />
        
        <img src={visa} alt="Visa Logo" style={{ width: "4%", marginLeft: "10px", borderRadius: "0%" }} />
        <img src={master} alt="Mastercard Logo" style={{ width: "4%", marginLeft: "10px", borderRadius: "0%" }} />
      </div>
      <div style={{ marginLeft: '160px' }}>
        <TextArea
          style={{ width: '374.5px' }}
          
          name="MY"
          placeholder="MM/YY"
          autoSize={{
            minRows: 1.5,
            maxRows: 5,
          }}
        />
        <TextArea
          style={{ width: '374.5px' }}
        
          name="CVC"
          placeholder="CVC"
          autoSize={{
            minRows: 1.5,
            maxRows: 5,
          }}
        />
        <img src={cvc} alt="CVC Logo" style={{ width: "4%", marginLeft: "5px", borderRadius: "0%" }} />
      </div>
      <TextCom2 text="ชื่อผู้ถือบัตร" />
      <div style={{ marginLeft: '160px' }}>
        <TextArea
          style={{ width: '749px' }}
          
          name="Name"
          placeholder=""
          autoSize={{
            minRows: 1.5,
            maxRows: 5,
          }}
        />
      </div>
      <TextCom2 text="ประเทศ" />
      <div style={{ marginLeft: '160px' }}>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: '749px' }}
      
          name="Amount"
          placeholder="Thailand"
          autoSize={{
            minRows: 1.5,
            maxRows: 5,
          }}
        />
      </div>
      <div style={{ margin: '50px 0' }} />
      <div className="tab-links">
        <nav>
          <ul>
            <li className="payment">ยอดชำระ</li>
            <li className="amount">2,000 บาท</li>
          </ul>
        </nav>
      </div>
      <div style={{ marginLeft: '160px' }}>
        <Link to="/Card/PaymentPage">
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

export default Card;
