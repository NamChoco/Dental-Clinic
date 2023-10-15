import React, { useState, useEffect} from "react";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Upload,
  Select,
  
} from "antd";

import { Table } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { PaymentsInterface } from "../interfaces/IPayment";
import { ServicesInterface } from "../interfaces/IService";
import { MembersInterface } from "../interfaces/IMember";

import type { ColumnsType, TableProps } from 'antd/es/table';

import { CreatePayment, GetServices , GetMembers} from "../services/https";
import { useNavigate } from "react-router-dom";

import Cookies from 'js-cookie'; //port
//Cookies.set('Name', '1');


const { Option } = Select;


function HistoryCreate() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [services, setSevices] = useState<ServicesInterface[]>([]);
  const [members, setMembers] = useState<MembersInterface[]>([]);
 



 


  const onFinish = async (values: PaymentsInterface) => {
    let res = await CreatePayment(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/PaymentPage");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  //set
  const getListst = async () => {
    let res = await GetServices();
    if (res) {
      setSevices(res);
    }
  };

  useEffect(() => {
    getListst();
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

  // const normFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
  // };

  let usernameActive = Cookies.get('MemberUser') || "";
  const foundMember = members.find(member => member.Username === usernameActive);
  const IDmember = foundMember ? Number(foundMember.ID) : null;
  

  console.log(usernameActive)
  console.log(IDmember);

  const columns: ColumnsType<MembersInterface> = [
  
    {
      title: 'ID',
      dataIndex: 'ID',
      sorter: (a, b) => (a.ID && b.ID ? a.ID - b.ID : 0),
      width: '5%',
    },
    {
      title: 'Firstname',
      dataIndex: 'Firstname',
      filterSearch: true,
      width: '40%',
      
    },
    {
      title: 'Lastname',
      dataIndex: 'Lastname',
      filterSearch: true,
      width: '40%',
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      filterSearch: true,
      width: '40%',
    },
  ];
  
  const onChange: TableProps<MembersInterface>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
  const App: React.FC = () => <Table columns={columns} dataSource={members} onChange={onChange} />;

  //กำหนดค่า fillter
  
  

  return (
    <div style={{ marginTop: 20}}>
    <Row gutter={16}>
      <Col xs={24} sm={24} md={24} lg={12} xl={14}>
        <h2> สมาชิก </h2>
        
        <Divider />
        <Card>
        <Table rowKey="ID" columns={columns} dataSource={members} />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={10}>
      {contextHolder}
      
            <h3> เพิ่มประวัติการรักษาผู้ป่วยในระบบ</h3>
            <Divider />
            <Card style={{ background: '#e9e9e9', borderColor: '#afafaf' }}>
              
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[10, 0]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                  <Form.Item name="MemberID" label="ค้นหาด้วย ชื่อ" rules={[{ required: true,  message: "กรุณาระบุชื่อ !", }]}>
                    <Select allowClear showSearch optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.ID} key={item.ID}>{item.Firstname}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                <Form.Item name="MemberID" label="ค้นหาด้วย นามสกุล" rules={[{ required: true,  message: "กรุณาระบุนามสกุล !", }]}>
                    <Select allowClear showSearch optionFilterProp="children">
                        {members.map((item) => (
                          <Option value={item.ID} key={item.ID}>{item.Lastname}</Option>
                        ))}
                    </Select>
                </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                <Form.Item name="MemberID" label="ID คือ">
                    <Select allowClear disabled optionFilterProp="children">
                        {members.map((item) => (
                          <Option value={item.Firstname} key={item.ID}>{item.ID}</Option>
                        ))}
                    </Select>
                </Form.Item>
                </Col> 
                <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                  <Form.Item name="ServicecID" label="รายการ" rules={[{ required: true,  message: "กรุณาระบุรายการ !", }]}>
                    <Select allowClear showSearch optionFilterProp="children">
                      {services.map((item) => (
                        <Option value={item.ID} key={item.ID}>{item.Title}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                 <Form.Item
                    name="MemberID"
                    label="รายชื่อของ member"
                    rules={[{ required: true, message: "กรุณาระบุรายการ !" }]}
                    initialValue={IDmember} // ค่าเริ่มต้นเป็น IDmember
                  >
                    <Select allowClear disabled optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.ID} key={item.ID}>
                          {item.ID} {/* เพิ่ม ID ไปในตัวเลือก */}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  </Col>         
              </Row>
              <Row justify="center">
                <Col style={{ marginTop: "5px" }}>
                  <Form.Item>
                    <Space>
                        <Button
                        htmlType="button"
                        style={{ marginRight: "10px" }}
                        onClick={() => navigate("/history")} // กำหนดให้คลิกปุ่มนี้ไปยัง "/history"
                        >
                      ยกเลิก
                    </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        icon={<PlusOutlined />}
                      >
                        ยืนยัน
                      </Button>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
          <Form>
        </Form>
        </Col>
      </Row>    
      
    </div>
    
  );
}


export default HistoryCreate;
