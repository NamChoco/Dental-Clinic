/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./index.css";
import dayjs from "dayjs";
import { CarryOutOutlined, GlobalOutlined } from "@ant-design/icons";
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
      render: (item) => Object.values(item.FirstName + " " + item.LastName),
    },
    {
      title: "แพทย์ผู้นัด",
      dataIndex: "Dentist",
      key: "id",
      render: (item) => Object.values(item.FirstName + " " + item.LastName),
    },
    {
      title: "เหตุที่นัด",
      dataIndex: "Problem",
      key: "problems",
    },
    {
      title: "วันที่นัด",
      dataIndex: "Datie",
      key: "daties",
      render: (date) => {
        return dayjs(date).format("DD/MM/YYYY");
      },
    },
    {
      title: "เวลาที่นัด",
      dataIndex: "Time",
      key: "times",
      render: (time) => {
        return dayjs(time).format("H:mm A");
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
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
