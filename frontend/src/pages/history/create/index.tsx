import React, { useState, useEffect, useRef } from "react";
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

import { Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { HistoryInterface } from "../../interfaces/IHistory";
import { GendersInterface } from "../../interfaces/IGender";
import { ServicesInterface } from "../../interfaces/IService";
import { MembersInterface } from "../../interfaces/IMember";

import type { ColumnsType, TableProps } from "antd/es/table";

import {
  CreateHistory,
  GetGender,
  GetServices,
  GetMembers,
  GetDentist,
} from "../../services/https";
import { useNavigate } from "react-router-dom";

import { DentistsInterface } from "../../interfaces/IDentist";
import Cookies from "js-cookie"; //port
//Cookies.set('Name', '1');

const { Option } = Select;

function HistoryCreate() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [genders, setGenders] = useState<GendersInterface[]>([]);

  const [services, setService] = useState<ServicesInterface[]>([]);
  const [members, setMembers] = useState<MembersInterface[]>([]);
  const [dentists, setDentists] = useState<DentistsInterface[]>([]);

  const onFinish = async (values: HistoryInterface) => {
    let res = await CreateHistory(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/history");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const getGetServicet = async () => {
    let res = await GetServices();
    if (res) {
      setService(res);
    }
  };

  useEffect(() => {
    getGetServicet();
  }, []);

  const getGendet = async () => {
    let res = await GetGender();
    if (res) {
      setGenders(res);
    }
  };

  useEffect(() => {
    getGendet();
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

  const GetDentistt = async () => {
    let res = await GetDentist();
    if (res) {
      setDentists(res);
    }
  };

  useEffect(() => {
    GetDentistt();
  }, []);
  // const normFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
  // };

  // ดึง Username จาก Cookies usernameAdmin
  let usernameActive: string | number | undefined;

  if (!Cookies.get("usernameAdmin")) {
    usernameActive = Number(Cookies.get("usernameDentistset")) || "";
  } else {
    usernameActive = "";
  }
  // ตรวจสอบว่ามีค่าหรือไม่
  //let usernameActive = Cookies.get('DentistUserset') || "";
  //const foundDentist = dentists.find(dentist => dentist.Username === usernameActive);
  //const IDdentist = foundDentist ? Number(foundDentist.ID) : null; // ถ้าไม่พบ foundDentist ให้เป็น 0 หรือค่าเริ่มต้นที่คุณต้องการ
  const isUsernameAdminEmpty = Cookies.get("usernameAdmin") === undefined;

  console.log(usernameActive);
  console.log(Cookies.get("usernameAdmin"));

  const columns: ColumnsType<MembersInterface> = [
    {
      title: "ID",
      dataIndex: "ID",
      sorter: (a, b) => (a.ID && b.ID ? a.ID - b.ID : 0),
      width: "5%",
    },
    {
      title: "ชื่อ",
      dataIndex: "FirstName",
      filterSearch: true,
      width: "40%",
    },
    {
      title: "ชื่อ",
      dataIndex: "LastName",
      filterSearch: true,
      width: "40%",
    },
  ];

  const onChange: TableProps<MembersInterface>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const App: React.FC = () => (
    <Table columns={columns} dataSource={members} onChange={onChange} />
  );

  //กำหนดค่า fillter

  return (
    <div style={{ marginTop: 20 }}>
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
          <Card style={{ background: "#e9e9e9", borderColor: "#afafaf" }}>
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[10, 0]}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={12}
                  style={{ marginLeft: "25%" }}
                >
                  <Form.Item name="MemberID" label="ค้นหาด้วย ชื่อ">
                    <Select allowClear showSearch optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.ID} key={item.ID}>
                          {item.FirstName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={12}
                  style={{ marginLeft: "25%" }}
                >
                  <Form.Item name="MemberID" label="ค้นหาด้วย นามสกุล">
                    <Select allowClear showSearch optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.ID} key={item.ID}>
                          {item.LastName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={12}
                  style={{ marginLeft: "25%" }}
                >
                  <Form.Item name="MemberID" label="ID คือ">
                    <Select allowClear disabled optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.FirstName} key={item.ID}>
                          {item.ID}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={12}
                  style={{ marginLeft: "25%" }}
                >
                  <Form.Item
                    name="ServiceID"
                    label="รายการ"
                    rules={[{ required: true, message: "กรุณาระบุรายการ !" }]}
                  >
                    <Select allowClear showSearch optionFilterProp="children">
                      {services.map((item) => (
                        <Option value={item.ID} key={item.ID}>
                          {item.Title}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={12}
                  style={{ marginLeft: "25%" }}
                >
                  <Form.Item
                    name="DentistID"
                    label="หมอผู้ดูแล"
                    rules={[{ required: true, message: "กรุณาระบุผู้รักษา !" }]}
                    initialValue={usernameActive}
                  >
                    <Select
                      allowClear
                      showSearch
                      optionFilterProp="children"
                      disabled={isUsernameAdminEmpty}
                    >
                      {/*  */}
                      {dentists.map((item) => {
                        if (item.ID) {
                          return (
                            <Option value={item.ID} key={item.ID}>
                              {item.FirstName}
                            </Option>
                          );
                        }
                        return null;
                      })}
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
          <Form></Form>
        </Col>
      </Row>
    </div>
  );
}

export default HistoryCreate;
