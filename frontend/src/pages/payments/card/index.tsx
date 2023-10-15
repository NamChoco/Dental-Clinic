import React, { useState, useEffect } from "react";
import { Input, Button, Form, message, Table, Col, Row, Divider, Modal, Select, Space} from "antd";
import TextComponent from "../../../Components/TextComponent";
import TextCom1 from "../../../Components/TextCom1";
import Grid from "../../../Components/Grid";
import TextCom2 from "../../../Components/TextCom2";
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import Box from "../../../Components/Box";
import Box2 from "../../../Components/Box2";
import card from '../../../assets/card.jpg';
import prom from '../../../assets/prom.jpg';
import visa from '../../../assets/visa.jpg';
import cvc from '../../../assets/cvc.jpg';
import master from '../../../assets/master.jpg';
import { ShoppingCartOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { MembersInterface } from "../../interfaces/IMember";
import { PaymentsInterface } from "../../interfaces/IPayment";
import { ServicesInterface } from "../../interfaces/IService";
import { CreatePayment, GetServices, GetMembers } from "../../services/https";
import Cookies from 'js-cookie'; //port
import type { ColumnsType, TableProps } from 'antd/es/table';
// Cookies.set('usernameMember', 'daimond');
// let serviceActive = Number(Cookies.get('Service'));
const { Option } = Select;
const { TextArea } = Input;
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const Card = () => {
  const [members, setMembers] = useState<MembersInterface[]>([]);
  const payments: PaymentsInterface[] = [];
  const [messageApi, contextHolder] = message.useMessage();
  const [services, setServices] = useState<ServicesInterface[]>([]);
  const navigate = useNavigate();
  const [selectedServiceID, setSelectedServiceID] = useState<number | undefined>(undefined);

  // Declare IDmember at the beginning of the component
  const usernameActive = Cookies.get('usernameMember') || "";
  const foundMember = members.find(member => member.Username === usernameActive);
  const IDmember = foundMember ? Number(foundMember.ID) : null;

  // Move onFinish inside the if block
    const onFinish = async (values: PaymentsInterface) => {
      // Add MemberID to the values object with type assertion
      values.MemberID = IDmember!;

      let res = await CreatePayment(values);
      if (res.status) {
        messageApi.open({
          type: "success",
          content: "บันทึกข้อมูลสำเร็จ",
        });
        setTimeout(function () {
          navigate("/Card/PaymentPage");
        }, 2000);
      } else {
        messageApi.open({
          type: "error",
          content: "บันทึกข้อมูลไม่สำเร็จ",
        });
        setTimeout(function () {
          navigate("/Dentral");
        }, 2000);
      }
    };

  const getService = async () => {
    let res = await GetServices();
    if (res) {
      setServices(res);
    }
  };

  useEffect(() => {
    getService();
  }, []); // เรียกใช้ useEffect ในการดึงข้อมูล Services เมื่อคอมโพเนนต์เรนเดอร์

  const GetMembet = async () => {
    let res = await GetMembers();
    if (res) {
      setMembers(res);
    }
  };

  useEffect(() => {
    GetMembet();
  }, []);
  
  // const findMemberID = (name: string) => {
  //   const foundMember = members.find(member => member.Firstname === name);
  //   return foundMember ? Number(foundMember.ID) : null;
  // };

  // คำสั่งที่เรียกหลังจากการดึงข้อมูล members
  useEffect(() => {
    payments.forEach((payment) => {
      const matchingMember = members.find((member) => member.ID === payment.MemberID);

      if (matchingMember) {
        // Set member.ID to the ID of the matching member
        payment.MemberID = matchingMember.ID;
      }
    });
  }, [members, payments]);

  console.log(usernameActive);
  console.log(IDmember);
  return (
    <>
      {contextHolder}
      <TextComponent text="ชำระเงิน" />
      <div>
        <TextCom1 text="วิธีการชำระเงิน" />
      </div>
      <section className="app-section">
        <div className="app-container"> 
          <Grid>
            <Link to="/Card" style={linkStyle}>
              <Box2>
                <h1>
                  <img src={card} alt="Logo" style={{ width: "20%", borderRadius: "0%" }} /> Card
                </h1>
              </Box2>
            </Link>
            <Link to="/Card/PromptPay" style={linkStyle}>
              <Box>
                <h1>
                  <img src={prom} alt="Logo" style={{ width: "30%", borderRadius: "0%" }} /> PromptPay
                </h1>
              </Box>
            </Link>
          </Grid>
        </div>
      </section>
      
      <div className="container">
        {services
          .filter((service) => service.ID === selectedServiceID)
          .map((service) => (
            <div className="asset" key={service.ID}>
              <h2 style={{ textAlign: 'center' }}>รายการ</h2>
              <div key={service.ID}>
                <div>
                  <h3 style={{ marginLeft: '20px' }}>
                    <PlusCircleOutlined style={{ marginRight: '8px', fontSize: '25px' }} /> {service.Title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
      <TextCom2 text="หมายเลขบัตร" />
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div style={{ marginLeft: '160px', display: 'flex', alignItems: 'center' }}>
          <Form.Item
            name="Numbercard"
            rules={[
              {
                required: true,
                message: "กรุณากรอกหมายเลขการ์ด !",
              },
            ]}
          >
            <TextArea
              style={{ width: '749px' }}
              placeholder="1234 1234 1234"
              name="Numbercard"
              autoSize={{
                minRows: 1.5,
                maxRows: 5,
              }}
              onKeyPress={(e) => {
                const isDigitOrSpace = /^[0-9\s]+$/.test(e.key);
                if (!isDigitOrSpace) {
                  e.preventDefault();
                }
              }}
            />
          </Form.Item>
          <img src={visa} alt="Visa Logo" style={{ width: "4%", marginLeft: "10px", borderRadius: "0%", marginTop: "-20px" }} />
          <img src={master} alt="Mastercard Logo" style={{ width: "4%", marginLeft: "10px", borderRadius: "0%", marginTop: "-20px" }} />
        </div>
        <div style={{ marginLeft: '160px', display: 'flex', alignItems: 'center' }}>
          <Form.Item
            name="MY"
            rules={[
              {
                required: true,
                message: "กรุณากรอก MM/YY !",
              },
            ]}
          >
            <TextArea
              style={{ width: '364.5px', marginRight: '10px' }}
              placeholder="MM/YY"
              autoSize={{
                minRows: 1.5,
                maxRows: 5,
              }}
              onKeyPress={(e) => {
                const allowedCharacters = /^[0-9/]+$/;
                if (e.key === ' ' || !allowedCharacters.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </Form.Item>
          <Form.Item
            name="CVC"
            rules={[
              {
                required: true,
                message: "กรุณากรอก CVC !",
              },
            ]}
          >
            <TextArea
              style={{ width: '364.5px', marginLeft: '10px' }}
              placeholder="CVC"
              autoSize={{
                minRows: 1.5,
                maxRows: 5,
              }}
                onKeyPress={(e) => {
                const allowedCharacters = /^[0-9\s]+$/;
                if (e.key === ' ' || !allowedCharacters.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </Form.Item>
          <img src={cvc} alt="CVC Logo" style={{ width: "6%", marginLeft: "5px", borderRadius: "0%", marginTop: "-30px" }} />
        </div>
        <TextCom2 text="ชื่อผู้ถือบัตร" />
        <div style={{ marginLeft: '160px' }}>
          <Form.Item
            name="Namecard"
            rules={[
              {
                required: true,
                message: "กรุณากรอกชื่อผู้ถือบัตร !",
              },
            ]}
          >
            <TextArea
              style={{ width: '749px' }}
              name="Namecard"
              placeholder=""
              autoSize={{
                minRows: 1.5,
                maxRows: 5,
              }}
            />
          </Form.Item>
        </div>
        <TextCom2 text="ประเทศ" />
        <div style={{ marginLeft: '160px' }}>
          <Form.Item
            name="Thailand"
            rules={[
              {
                required: true,
                message: "กรุณากรอกประเทศ !",
              },
            ]}
          >
            <TextArea
              style={{ width: '749px' }}
              name="Thailand"
              placeholder="Thailand"
              autoSize={{
                minRows: 1.5,
                maxRows: 5,
              }}
            />
          </Form.Item>
        </div>
        <div style={{ marginLeft: '160px' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={3}>
            <Form.Item name="ServiceID" label="รายการ" rules={[{ required: true, message: "กรุณาระบุรายการ !" }]}  >
              <Select allowClear value={selectedServiceID} onChange={(value) => setSelectedServiceID(value)}>
                {services.map((item) => (
                  <Option value={item.ID} key={item.Title}>
                    {item.Title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </div>
        <div style={{ marginLeft: '160px' }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '749px', height: '50px', fontSize: '20px' }}
            >
              <ShoppingCartOutlined style={{ marginRight: '8px', fontSize: '25px' }} />
              ยืนยันการชำระเงิน
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div>
        {services
          .filter((service) => service.ID === selectedServiceID)
          .map((service) => (
            <div style={{ marginTop: '-250px' }}>
              <div className="tab-links">
                <nav>
                  <ul>
                    <li className="payment">ยอดชำระ</li>
                    <li className="amount">{service?.Price} บาท</li>
                  </ul>
                </nav>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;
