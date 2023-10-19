import React, { useEffect, useState } from "react";
import "../Appointment/index.css";
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Breadcrumb,
  Avatar,
  Input,
  Select,
  message,
  TimePicker,
} from "antd";
//import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AppointmentInterface } from "../interfaces/IAppointments";
import { DentistsInterface } from "../interfaces/IDentist";
import { MembersInterface } from "../interfaces/IMember";
import { CreateAppointment } from "../services/https/index";
import {
  //GetAppointment,
  GetDentist,
  GetMemberByID,
} from "../services/https";
// import { ColumnsType } from "antd/es/table";
const { Option } = Select;
const formattime = "HH:mm";

const Body = () => {
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
    // GetAppointments();
    GetMembers();
    GetDentists(); // Corrected function name
  }, []);

  const GetMembers = async () => {
    let res = await GetMemberByID(); // Call the correct function here.
    if (res) {
      setMembers(res);
    }
  };

  const dateFormat = "DD/MM/YYYY";

  const GetDentists = async () => {
    let res = await GetDentist(); // Change to GetDentists()
    if (res) {
      setDentists(res);
    }
  };

  return (
    <div>
      {contextHolder}
      <Breadcrumb
        className="web"
        items={[
          {
            href: "/dentApp",
            title: (
              <>
                <CalendarOutlined />
                <span>บันทึกการนัดหมาย</span>
              </>
            ),
          },
          {
            href: "/dentRecord",
            title: (
              <>
                <CarryOutOutlined />
                <span>ประวัติการนัดหมาย</span>
              </>
            ),
          },
          {
            href: "/memberRecord",
            title: (
              <>
                <CarryOutOutlined />
                <span>ประวัติการนัดหมายลูกค้า</span>
              </>
            ),
          },
        ]}
      />
      <h2 className="tabText">บันทึกการนัดหมาย</h2>
      <div className="box">
        <div className="tab">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="ชื่อผู้ป่วย"
              className="tabname"
              name="MemberID"
              rules={[{ required: true, message: "กรุณาระบุชื่อผู้ป่วย!" }]}
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
              rules={[{ required: true, message: "กรุณาระบุการนัดหมาย!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="วันนัดหมาย" className="tabdate" name="DateTime">
              <DatePicker format={dateFormat} />
              <TimePicker style={{ marginLeft: "10px" }} format={formattime} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                ยืนยัน
              </Button>
            </Form.Item>
          </Form>
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
