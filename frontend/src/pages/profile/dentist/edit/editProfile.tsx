import React, { FC, useState, useEffect, useId } from "react";
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
  DatePicker,
} from "antd";
import type { DatePickerProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { DentistsInterface } from "../../../../interfaces/IDentist";
import { GendersInterface } from "../../../../interfaces/IGender";
import {
  GetGender,
  GetDentistByUsername,
  UpdateDentist,
} from "../../../../services/https/";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import Cookies from "js-cookie";

const { Option } = Select;

const dateFormat = "DD/MM/YYYY";

const handleChange = (value: string) => {
  console.log(`select ${value}`);
};

const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const DentistEditProfile: FC = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [dentist, setDentist] = useState<DentistsInterface>();
  const [genders, setGenders] = useState<GendersInterface[]>([]);

  // รับข้อมูลจาก params
  let username = Cookies.get('usernameDentist');
  // อ้างอิง form กรอกข้อมูล
  const [form] = Form.useForm();

  const onClick = async () => {
    navigate(`/member/profile/${dentist?.Username}`);
  };

  const onFinish = async (values: DentistsInterface) => {
    values.ID = dentist?.ID;
    values.AdminID = 1;
    const NewUsername = `${values?.Username}`;
    Cookies.set("usernameDentist", NewUsername ,{ expires: 7 });
    let res = await UpdateDentist(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "แก้ไขข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate(`/dentist/profile/${values?.Username}`);
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "แก้ไขข้อมูลไม่สำเร็จ",
      });
    }
  };

  const getGenders = async () => {
    let res = await GetGender();
    if (res) {
      setGenders(res);
    }
  };

  const getDentistByUsername = async () => {
    let res = await GetDentistByUsername(username);
    if (res) {
      setDentist(res);
      // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
      form.setFieldsValue({
        Username: res.Username,
        Password: res.Password,
        FirstName: res.FirstName,
        LastName: res.LastName,
        GenderID: res.GenderID,
        Email: res.Email,
        Phone_number: res.Phone_number,
        Birthday: dayjs(res.Birthday),
        AdminID: res.AdminID,
      });
    }
  };

  useEffect(() => {
    getGenders();
    getDentistByUsername();
  }, []);

  return (
    <div className="DentistEditProfile">
      {contextHolder}
      <Card>
        <h2> แก้ไขข้อมูลส่วนตัว </h2>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={8} />
          <Col xs={24} sm={24} md={24} lg={24} xl={16}>
            <Form
              name="basic"
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Card>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="ชื่อบัญชี"
                      name="Username"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกชื่อ !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={0} md={0} lg={0} xl={2} />
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="รหัสผ่าน"
                      name="Password"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกชื่อ !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="ชื่อ"
                      name="FirstName"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกชื่อ !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={0} md={0} lg={0} xl={2} />
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="นามกสุล"
                      name="LastName"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกนามสกุล !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="อีเมล"
                      name="Email"
                      rules={[
                        {
                          type: "email",
                          message: "รูปแบบอีเมลไม่ถูกต้อง !",
                        },
                        {
                          required: true,
                          message: "กรุณากรอกอีเมล !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="เบอร์โทรศัพท์"
                      name="Phone_number"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกเบอร์โทรศัพท์ !",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="เพศ"
                      name="GenderID"
                      rules={[{ required: true, message: "กรุณาระบุเพศ !" }]}
                    >
                      <Select allowClear onChange={handleChange}>
                        {genders.map((item) => (
                          <Option value={item.ID} key={item.Name}>
                            {item.Name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                    <Form.Item
                      label="วันเกิด"
                      name="Birthday"
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกเบอร์โทรศัพท์ !",
                        },
                      ]}
                    >
                      <DatePicker
                        onChange={onDateChange}
                        defaultValue={dayjs("01/01/2000", dateFormat)}
                        format={dateFormat}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="end">
                  <Col style={{ marginTop: "40px" }}>
                    <Form.Item>
                      <Space>
                          <Button
                            htmlType="button"
                            onClick={onClick}
                            style={{ marginRight: "10px" }}
                          >
                            ยกเลิก
                          </Button>
                        <Button
                          type="primary"
                          htmlType="submit"
                        >
                          ยืนยัน
                        </Button>
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DentistEditProfile;
