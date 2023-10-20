/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./index.css";
import {
  CalendarOutlined,
  CarryOutOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Table, Col } from "antd";
import { ColumnsType } from "antd/es/table";
import { GetAppointment } from "../services/https";
import { AppointmentInterface } from "../interfaces/IAppointments";

const Membershow = () => {
  const columns: ColumnsType<AppointmentInterface> = [
    {
      title: "ชื่อ",
      dataIndex: "Member",
      key: "id",
      render: (item) => Object.values(item.FirstName),
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
      title: "วันที่-เวลาทำการนัดหมาย",
      dataIndex: "Time",
      key: "datetimes",
      render: (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString();
      },
    },
  ];

  const [appointments, setAppointments] = useState<AppointmentInterface[]>([]);

  const GetAppointments = async () => {
    let res = await GetAppointment();
    if (res) {
      setAppointments(res);
    }
  };
  useEffect(() => {
    GetAppointments();
  }, []);

  return (
    <div>
      <Breadcrumb
        className="web"
        items={[
          {
            href: "/memberRecord",
            title: (
              <>
                <CarryOutOutlined />
                <span>ประวัติการนัดหมายของลูกค้า</span>
              </>
            ),
          },
        ]}
      />
      <h2 className="tabText">นัดหมาย</h2>
      <Col>
        <Table columns={columns} dataSource={appointments} />
      </Col>
      <footer className="footer">
        ks clinic
        <p className="icon">
          <GlobalOutlined />
        </p>
      </footer>
    </div>
  );
};

export default Membershow;
