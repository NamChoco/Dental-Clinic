import React from "react";
import { Row, Col, Divider, Card } from "antd";
import  map from '../../assets/map.jpg'

const ContactData = () => {
  // ตัวอย่างข้อมูลการติดต่อ
  const contactInfo = [
    {
      name: "Komsan Dental Clinic",
      phone: "098-235-2659",
      address: "123 Suranaree, Nakhon Ratchasima",
      post: "30000",
      day: "Mon - Fri",
      time: "09:00 AM - 08:00 PM"
    },
    // เพิ่มข้อมูลการติดต่อเพิ่มเติมตามต้องการ
  ];

  return (
    <div>
      <Row>
        <Col span={24}>
          <Divider>ข้อมูลการติดต่อ</Divider>
        </Col>
      </Row>
      
      <Row style={{marginLeft : '5%'}}>
        {contactInfo.map((contact, index) => (
         <Card style={{ width: "40%", marginBottom: "20px" }}>
          <Col key={index} span={10}>
            <div>
            <p style={{ fontSize: "20px" }}>{contact.name}</p>
              <p style={{ fontSize: "16px" }}>เบอร์โทร: {contact.phone}</p>
              <p style={{ fontSize: "16px" }}>ที่อยู่: {contact.address}</p>
              <p style={{ fontSize: "16px" }}>ไปรษณีย์ {contact.post}</p>
              <p style={{ fontSize: "16px" }}>วันทำการ</p>
              <p style={{ fontSize: "16px" }}>วัน {contact.day}</p>
              <p style={{ fontSize: "16px" }}>เวลา {contact.time}</p>

            </div>
          </Col>
          </Card>
        ))}
        <img src={map} alt="Logo" style={{ width: '50%'}}/>
      </Row>
      
    </div>
  );
};

export default ContactData;
