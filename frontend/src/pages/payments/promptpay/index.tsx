import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Select, Upload, message } from "antd";
import TextComponent from '../../../Components/TextComponent';
import TextCom1 from '../../../Components/TextCom1';
import Grid from '../../../Components/Grid';
import TextCom2 from '../../../Components/TextCom2';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import Box from '../../../Components/Box';
import Box2 from '../../../Components/Box2';
import qr from '../../../assets/qr.jpg'
import card from '../../../assets/card.jpg';
import prom from '../../../assets/prom.jpg';
import { MembersInterface } from '../../interfaces/IMember';
import { PaymentsInterface } from "../../interfaces/IPayment";
import { ImageUpload } from "../../interfaces/IUpload";
import { ServicesInterface } from "../../interfaces/IService";
import { CreatePayment, GetServices,GetMembers } from "../../services/https";
import { PlusOutlined, ShoppingCartOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Cookies from 'js-cookie'; //port
// let serviceActive = Number(Cookies.get('Service'));
// Cookies.set('usernameMember', 'daimond');
const { Option } = Select;
const { TextArea } = Input;

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const PromptPay = () => {
  const [members, setMembers] = useState<MembersInterface[]>([]);
  const [profile, setProfile] = useState<ImageUpload>();
  const [messageApi, contextHolder] = message.useMessage();
  const payments: PaymentsInterface[] = [];

  const onFinish = async (values: PaymentsInterface) => {
    values.MemberID = IDmember!;
    values.Upload = profile?.thumbUrl;
    let res = await CreatePayment(values);

    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(() => {
        navigate("/Card/PaymentPage");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const [services, setServices] = useState<ServicesInterface[]>([]);
  const navigate = useNavigate();

  const getService = async () => {
    let res = await GetServices();
    if (res) {
      setServices(res);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  const GetMembet = async () => {
    let res = await GetMembers();
    if (res) {
      setMembers(res);
    }
  };

  useEffect(() => {
    GetMembet();
  }, []);

  const [selectedServiceID, setSelectedServiceID] = useState<number | undefined>();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setProfile(e?.fileList[0]);
    return e?.fileList;
  };


    // Declare IDmember at the beginning of the component
    const usernameActive = Cookies.get('usernameMember') || "";
    const foundMember = members.find(member => member.Username === usernameActive);
    const IDmember = foundMember ? Number(foundMember.ID) : null;

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
     <div style={{ marginTop: '300px' }}>
      {services
        .filter((service) => service.ID === selectedServiceID)
        .map((service) => (
          <div className="container" key={service.ID}>
            <div className="asset">
              <h2 style={{ textAlign: 'center' }}>รายการ</h2>
              <div key={service.ID}>
                <div>
                  <h3 style={{ marginLeft: '20px' }}>
                    <PlusCircleOutlined style={{ marginRight: '8px', fontSize: '25px' }} /> {service?.Title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      <img src={qr} alt="qr " style={{ width: "15%", marginLeft: "420px", marginTop: "-300px", borderRadius: "0%" }} />
      <div style={{ marginLeft: "280px" }}>
        <TextCom2 text={<span><span style={{ color: "black" }}>ชื่อบัญชี : </span><span style={{ color: "blue" }}>ksdentralclinic</span></span>} />
      </div>
      <div style={{ marginLeft: "266px" }}>
        <TextCom2 text={<span><span style={{ color: "black" }}>เลขพร้อมเพย์ : </span><span style={{ color: "blue" }}>0956639823</span></span>} />
      </div>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
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
          <Col xs={24} sm={24} md={24} lg={24} xl={5}>
            <Form.Item
              label="ชื่อผู้โอน"
              name="Namepay"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกชื่อผู้โอน !",
                },
              ]}
            >
              <TextArea
                style={{ width: '749px' }}
                name="Namepay"
                placeholder=""
                autoSize={{
                  minRows: 1.5,
                  maxRows: 5,
                }}
              />
            </Form.Item>
          </Col>
        </div>
        <div style={{ marginLeft: '160px' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={5}>
            <Form.Item
              label="จำนวนเงินที่โอน"
              name="Amountpay"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกจำนวนเงินที่โอน !",
                },
                {
                  pattern: /^[0-9]*$/, // Only allow numeric characters
                  message: "กรุณากรอกตัวเลขเท่านั้น!",
                },
              ]}
            >
              <TextArea
                style={{ width: '749px' }}
                name="Amountpay"
                placeholder=""
                autoSize={{
                  minRows: 1.5,
                  maxRows: 5,
                }}
              />
            </Form.Item>
          </Col>
        </div>

        <div style={{ marginLeft: '160px' }}>
          <Col xs={11} sm={11} md={15} lg={12} xl={12}>
            <Form.Item
              label="รูปสลิปโอนเงิน"
              name="Profile"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: "กรุณาแนบสลิปโอนเงิน !",
                },
              ]}
            >
              <Upload maxCount={1} multiple={false} listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>อัพโหลด</div>
                </div>
              </Upload>
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
    </>
  );
};

export default PromptPay;
