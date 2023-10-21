import React, { useState, useEffect } from "react";
import { Space, Table, Button, Col, Row, Divider, Modal, message } from "antd";

import type { ColumnsType, TableProps } from 'antd/es/table';

import { GetHistory, DeleteHistoryByID } from "../../../services/https";

import { HistoryInterface } from "../../../interfaces/IHistory";

import { Link, useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

//Cookies.set('Name', '1');

let usernameActive = String(Cookies.get('usernameMember'));

function Customers() {
  
  const columns: ColumnsType<HistoryInterface> = [];
  
    
  if (usernameActive) {
    columns.push(

      {
        title: "ชื่อ",
        dataIndex: "Member",
        key: "member",
        render: (item) => Object.values(item.FirstName),
      },
      {
        title: "นามสกุุล",
        dataIndex: "Member",
        key: "member",
        render: (item) => Object.values(item.LastName),
      },
      {
        title: "รายการ",
        dataIndex: "Service",
        key: "service",
        render: (item) => Object.values(item.Title),
      },
      {
        title: "ผู้รักษา",
        dataIndex: "Dentist",
        key: "dentist",
        render: (item) => Object.values(item.FirstName),
      },
      {
        title: "เวลาที่บันทึกประวัติ",
        dataIndex: "CreatedAt",
        key: "createdAt",
        sorter: (a, b) => (a.ID && b.ID ? a.ID - b.ID : 0),
        render: (createdAt) => {
          const date = new Date(createdAt);
          return date.toLocaleString(); // หรือวิธีการจัดรูปแบบอื่น ๆ ตามที่คุณต้องการ
        },
      },
    );
  }
  
    
  

  

  const navigate = useNavigate();



  //กำหนดค่า fillter
  const [history, setHistorys] = useState<HistoryInterface[]>([]);
  const filteredByUsersname = history.filter(history => history.Member?.Username === usernameActive);
  console.log(filteredByUsersname);
  // const userWithMatchingUsername = history.find(history => history.Member?.Username === usernameActive);
  // const IDUser = String(userWithMatchingUsername)
  // Cookies.set('IDUser', IDUser);

  const [messageApi, contextHolder] = message.useMessage();

  // Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteId, setDeleteId] = useState<Number>();

  const getHistorys = async () => {
    let res = await GetHistory();
    if (res) {
      setHistorys(res);
    }
  };


  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    getHistorys();
  }, []);


  


  return (
    <>
      {contextHolder}
      <Row>
        <Col span={12}>
          <h2>จัดการข้อมูลผู้ป่วย</h2>
        </Col>
        
      </Row>
      <Divider />
      <div style={{ marginTop: 20 }}>
        <Table rowKey="ID" columns={columns} dataSource={filteredByUsersname} pagination={{ pageSize: 5}} size="middle"/>
      </div>

    </>
  );
}

export default Customers;
