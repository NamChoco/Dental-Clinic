import React, { useEffect, useState } from "react";
import "../Appointment/index.css";
import { GlobalOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  message,
  TimePicker,
  Col,
} from "antd";
import { useNavigate } from "react-router-dom";
import { AppointmentInterface } from "../../interfaces/IAppointments";
import { DentistsInterface } from "../../interfaces/IDentist";
import { MembersInterface } from "../../interfaces/IMember";
import { CreateAppointment } from "../../services/https/index";
import { GetDentistByID, GetMemberByID } from "../../services/https";
const { Option } = Select;
const Body = () => {
  const dateFormat = "DD/MM/YYYY";
  const timeFormat = "H:mm A";
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [dentists, setDentists] = useState<DentistsInterface[]>([]);
  const [members, setMembers] = useState<MembersInterface[]>([]);
  const onFinish = async (values: AppointmentInterface) => {
    let res = await CreateAppointment(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "สำเร็จ",
      });
      setTimeout(function () {
        navigate("/dentRecord");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "ไม่ถูกต้อง",
      });
    }
  };
  useEffect(() => {
    GetMembers();
    GetDentists();
  }, []);
  const GetMembers = async () => {
    let res = await GetMemberByID();
    if (res) {
      setMembers(res);
    }
  };

  const GetDentists = async () => {
    let res = await GetDentistByID();
    if (res) {
      setDentists(res);
    }
  };
  return (
    <div>
      {contextHolder}
      <div className="outbox">
        <div className="boxx" style={{ marginLeft: "25%" }}>
          <div style={{ marginLeft: "25%" }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="boxxx">
                <Col xs={15} sm={15} md={15} lg={15} xl={15}>
                  <Form.Item
                    label="ชื่อผู้ป่วย"
                    className="tabname"
                    name="MemberID"
                    rules={[
                      { required: true, message: "กรุณาระบุชื่อผู้ป่วย!" },
                    ]}
                  >
                    <Select allowClear showSearch optionFilterProp="children">
                      {members.map((item) => (
                        <Option value={item.ID} key={item.Username}>
                          {item.Username}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="แพทย์ผู้นัด"
                    className="tabdent"
                    name="DentistID"
                    rules={[{ required: true, message: "กรุณาระบุหมอ!" }]}
                  >
                    <Select allowClear showSearch optionFilterProp="children">
                      {dentists.map((item) => (
                        <Option value={item.ID} key={item.Username}>
                          {item.Username}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="เหตุที่นัด"
                    className="tabprob"
                    name="Problem"
                    rules={[
                      { required: true, message: "กรุณาระบุการนัดหมาย!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </div>
              <div className="dt" style={{ marginLeft: "46px" }}>
                <Form.Item label="วันนัดหมาย" className="tabdate" name="Datie">
                  <DatePicker
                    name="datie"
                    // Pass the formatted time string from Go
                    format={dateFormat}
                  />
                </Form.Item>
                <Form.Item className="tabdate" name="Time">
                  <TimePicker
                    name="time"
                    style={{ marginLeft: "10px" }}
                    format={timeFormat}
                    //defaultValue={moment()} // Set the default time to the current time
                  />
                </Form.Item>
              </div>
              <div className="sub">
                <Form.Item wrapperCol={{ offset: 5, span: 9 }}>
                  <Button type="primary" htmlType="submit">
                    ยืนยัน
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
};
export default Body;
