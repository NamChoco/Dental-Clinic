import React, { useState, useEffect, useId } from "react";
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
import { PlusOutlined } from "@ant-design/icons";
import { HistoryInterface } from "../../interfaces/IHistory";
import { GendersInterface } from "../../interfaces/IGender";
import { ServicesInterface } from "../../interfaces/IService";
import { GetDentist, GetHistoryById, GetServices ,GetMembers,  UpdateHistory } from "../../services/https";
import { useNavigate, useParams } from "react-router-dom";
import { MembersInterface } from "../../interfaces/IMember";
import Cookies from 'js-cookie'; //port
import { DentistsInterface } from "../../interfaces/IDentist";
const { Option } = Select;

function CustomerEdit() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [history, setHistory] = useState<HistoryInterface>();
  const [services, setService] = useState<ServicesInterface[]>([]);
  const [members, setMembers] = useState<MembersInterface[]>([]);
  const [dentists, setDentists] = useState<DentistsInterface[]>([]);

  let usernameActive = Cookies.get('usernameDentist') || ""; // ตรวจสอบว่ามีค่าหรือไม่
  const foundDentist = dentists.find(dentist => dentist.Username === usernameActive);
  const IDdentist = foundDentist ? Number(foundDentist.ID) : null; // ถ้าไม่พบ foundDentist ให้เป็น 0 หรือค่าเริ่มต้นที่คุณต้องการ
  const  isUsernameAdminEmpty = (Cookies.get('usernameAdmin') === undefined );


  console.log(usernameActive);
  console.log(IDdentist);
  // รับข้อมูลจาก params
  let { id } = useParams();
  // อ้างอิง form กรอกข้อมูล
  const [form] = Form.useForm();

  const onFinish = async (values: HistoryInterface) => {
    values.ID = history?.ID;
    let res = await UpdateHistory(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "แก้ไขข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/history");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "แก้ไขข้อมูลไม่สำเร็จ",
      });
    }
  };



  const GetServicet = async () => {
    let res = await GetServices();
    if (res) {
      setService(res);
    }
  };

  const GetMembert = async () => {
    let res = await GetMembers();
    if (res) {
      setMembers(res);
    }
  };
  const GetDentistt = async () => {
    let res = await GetDentist();
    if (res) {
      setDentists(res);
    }
  };

  useEffect(() => {
    
    GetDentistt();
    
  }, []);


  const getHistoryById = async () => {
    let res = await GetHistoryById(Number(id));
    if (res) {
      setHistory(res);
      // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
      form.setFieldsValue({ 
        MemberID:  res.MemberID,
        ServiceID: res.ServiceID,
        DentistID: res.DentistID,
        CreatedAt: res.CreatedAt,
        
    });
    }
  };

  useEffect(() => {
    
    
    
   
    getHistoryById();
    GetMembert();
    GetServicet();
    
    
  }, []);




  return (
    <div>
      {contextHolder}
      <Card>
        <h2> แก้ไขข้อมูล ผู้ป่วย</h2>
        <Divider />
        <Form
          name="basic"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
         
            <Col xs={24} sm={24} md={24} lg={24} xl={12} style={{marginLeft: '25%'}}>
              <Form.Item
                label="ชื่อ"
                name="MemberID"
                rules={[
                  {
                    required: true,
                    message: "ไม่สามารถแก้ไขข้อมูลผู้ป่ายนอกได้",
                  },
                ]}
              >
                <Select allowClear disabled>
                  {members.map((item) => (
                    <Option value={item.ID} key={item.ID}>
                      {item.FirstName}
                    </Option>
                  ))}
                </Select >
              </Form.Item>
            </Col>
           
            <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
              <Form.Item
                label="นามกสุล"
                name="MemberID"
                rules={[
                  {
                    required: true,
                    message: "ไม่สามารถแก้ไขข้อมูลผู้ป่วย",
                  },
                ]}              
              >                
              <Select allowClear disabled>
              {members.map((item) => (
                <Option value={item.ID} key={item.LastName}>
                  {item.LastName}
                </Option>
              ))}
            </Select >
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
              
              <Form.Item
                label="รายการ"
                name="ServiceID"
                
              >
                <Select allowClear showSearch={false} optionFilterProp="children" >
                  {services.map((item) => (
                    <Option value={item.ID} key={item.Title}>
                      {item.Title} 
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
              <Form.Item
                label="*วันและเวลาที่อัพเดตล่าสุด"
                name="CreatedAt"
              >
                <Input  disabled/>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}style={{marginLeft: '25%'}}>
                <Form.Item
                  name="DentistID"
                  label="หมอผู้ดูแล"
                  rules={[{ required: true, message: "กรุณาระบุผู้รับผิดชอบ !" }]}
                  initialValue={IDdentist}
                >
                  <Select allowClear showSearch optionFilterProp="children" disabled={isUsernameAdminEmpty} >
                    {dentists.map((item) => {
                      if (item.ID ) {
                        return <Option value={item.ID} key={item.ID}>{item.FirstName}</Option>;
                      }
                      return null;
                    })}
                  </Select>
                </Form.Item>




                </Col>    
          <Row justify="end">
            <Col style={{ marginTop: "40px" }}>
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
    </div>
  );
}

export default CustomerEdit;
