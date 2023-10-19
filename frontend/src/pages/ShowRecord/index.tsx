import React, { useEffect, useState } from "react";
import "./index.css";
import {
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Table, Col, Row } from "antd"; // Added Row component
import { ColumnsType } from "antd/lib/table";
import { AppointmentInterface } from "../interfaces/IAppointments";
import { GetAppointment } from "../services/https";
import dayjs from "dayjs";

function ShowRecord() {
  const [appointments, setAppointments] = useState<AppointmentInterface[]>([]);

  const GetAppointments = async () => {
    let res = await GetAppointment(); // Call the correct function here.
    if (res) {
      setAppointments(res);
    }
  };

  useEffect(() => {
    GetAppointments();
  }, []);

  const columns: ColumnsType<AppointmentInterface> = [
    {
      title: "ลำดับ",
      dataIndex: "ID",
      key: "id",
    },
    {
      title: "ชื่อ",
      dataIndex: "Member",
      key: "id",
      render: (item) => Object.values(item.FirstName),
    },
    {
      title: "นามสกุล",
      dataIndex: "Member",
      key: "id",
      render: (item) => Object.values(item.LastName),
    },
    {
      title: "แพทย์ผู้นัด",
      dataIndex: "Dentist",
      key: "id",
      render: (item) => Object.values(item.FirstName),
    },
    {
      title: "เหตุที่นัด",
      dataIndex: "Problem",
      key: "problems",
    },
    {
      title: "วันที่",
      dataIndex: "DateTime",
      key: "datetimes",
      render: (text: string) => dayjs(text).format("DD/MM/YYYY"),
    },
    {
      title: "เวลานัด",
      dataIndex: "Time",
      key: "times",
      render: (Time) => {
        const times = new Date(Time);
        const formattimes = times.toLocaleTimeString(); // "th-TH" is the locale for Thai language, you can change it as needed
        return formattimes;
      },
    },
  ];

  return (
    <div>
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
        ]}
      />
      <h2 className="tabText">นัดหมาย</h2>
      <Row>
        <Col>
          <Table rowKey="ID" columns={columns} dataSource={appointments} />
        </Col>
      </Row>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
}

export default ShowRecord;
