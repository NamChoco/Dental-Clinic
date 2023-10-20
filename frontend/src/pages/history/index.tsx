import React, { useState, useEffect } from "react";
import { Space, Table, Button, Col, Row, Divider, Modal, message, Input } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import type { ColumnsType, TableProps } from 'antd/es/table';

import { GetHistory, DeleteHistoryByID, GetDentist } from "../../services/https";

import { HistoryInterface } from "../../interfaces/IHistory";

import { Link, useNavigate } from "react-router-dom";
import { DentistsInterface } from "../../interfaces/IDentist";
import Cookies from "js-cookie";



function Customers() {

  const [dentists, setDentists] = useState<DentistsInterface[]>([]); 


  const GetDentistt = async () => {
    let res = await GetDentist();
    if (res) {
      setDentists(res);
    }
  };

  useEffect(() => {
    
    GetDentistt();
  }, []);

  let usernameActive = Cookies.get('usernameDentist') || ""; // ตรวจสอบว่ามีค่าหรือไม่
  const foundDentist = dentists.find(dentist => dentist.Username === usernameActive);
  const IDdentist = foundDentist ? Number(foundDentist.ID) : null; // ถ้าไม่พบ foundDentist ให้เป็น 0 หรือค่าเริ่มต้นที่คุณต้องการ
  
  console.log(usernameActive);
  console.log(IDdentist);
  Cookies.set('usernameDentistset',String(IDdentist));

  
  const columns: ColumnsType<HistoryInterface> = [
    {
      title: 'ID',
      dataIndex: 'ID',
      
    },
    {
      title: "ชื่อ",
      dataIndex: "Member",
      key: "member",
      render: (item) => Object.values(item.FirstName),

      //render: (FirstName, record) => {
        //if (typeof FirstName !== 'string' || FirstName.trim() === '') {
         // return record.Member?.FirstName;
        //} else {
        //  return FirstName;
        //}
      //},   
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
      sorter: (a, b) => (b.ID && a.ID ? b.ID - a.ID : 0),
      render: (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleString(); // หรือวิธีการจัดรูปแบบอื่น ๆ ตามที่คุณต้องการ
      },
    },

    {
      title: "จัดการ",
      dataIndex: "Manage",
      key: "manage",
      render: (text, record, index) => (
        <><>
          <Button  onClick={() =>  navigate(`/history/edit/${record.ID}`)} shape="circle" icon={<EditOutlined />} size={"large"} />
          <Button
            onClick={() => showModal(record)}
            style={{ marginLeft: 10 }}
            shape="circle"
            icon={<DeleteOutlined />}
            size={"large"}
            danger
          />
        </>
        </>
      ),
    },
  ];

  
  
  const navigate = useNavigate();

  

  

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

  const [historys, setHistorys] = useState<HistoryInterface[]>([]);




  const showModal = (val: HistoryInterface) => {
    setModalText(
      `คุณต้องการลบประวัติการรักษาที่ ID = "${val.ID}" หรือไม่ ?`
    );
    setDeleteId(val.ID);
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    let res = await DeleteHistoryByID(deleteId);
    if (res) {
      setOpen(false);
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      getHistorys();
    } else {
      setOpen(false);
      messageApi.open({
        type: "error",
        content: "เกิดข้อผิดพลาด !",
      });
    }
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    getHistorys();
  }, []);

  //ปุ่มเซิด ค่อยทำ
  


  return (
    <>
      {contextHolder}
      <Row>
        <Col span={12}>
          <h2>จัดการข้อมูลผู้ป่วย</h2>
        </Col>
        <Col span={12} style={{ textAlign: "end", alignSelf: "flex-end" }}>
          <Space>
          <Link to="/history/create">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ backgroundColor: 'Green', borderColor: 'blue', color: 'white' ,marginRight: '10px'}}
            >
              เพิ่มประวัติการรักษาผู้ป่วยในระบบ
            </Button>
          </Link>
          </Space>
          
        </Col>
      </Row>
      <Divider />
      
      <div style={{ marginTop: 20 }}>
        <Table rowKey="ID" columns={columns} dataSource={ historys} />
      </div>
      <Modal
        title="ลบข้อมูล ?"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}

export default Customers;
