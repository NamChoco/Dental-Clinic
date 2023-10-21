import React, { useState, useEffect } from "react";
import { Space, Table, Button, Col, Row, Divider, Modal, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { GetPayments, DeletePaymentByID } from "../../../services/https";
import { GetMembers } from "../../../services/https";
import { MembersInterface } from "../../../interfaces/IMember";
import { PaymentsInterface } from "../../../interfaces/IPayment";
import { Link, useNavigate } from "react-router-dom";
 

function Payments() {
  
  const columns: ColumnsType<PaymentsInterface> = [
    {
      title: "ลำดับ",
      dataIndex: "ID",
      key: "id",
    },
    {
        title: " รายการ",
        dataIndex: "Service",
        key: "service",
        render: (item) => Object.values(item.Title),
      },
     
    {
      title: "IDservice",
      dataIndex: "Service", // Assuming "Service" is the property containing the Service object
      key: "amount",
      render: (item) => item.ID, // Display the Amount property from the Service object
    },
    {
      title: "วันที่/เวลา",
      dataIndex: "CreatedAt",
      key: "createat",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "ชื่อ Card",
      dataIndex: "Namecard",
      key: "namecard",
    },
    {
      title: "ชื่อ Promptpay",
      dataIndex: "Namepay",
      key: "namepay",
    },
    {
      title: "ยอดชำระpromptpay",
      dataIndex: "Amountpay",
      key: "Amountpay",
    },
    {
        title: "รูปสลิป",
        dataIndex: "Profile",
        key: "profile",
        render: (text, record, index) => (
          <img src={record.Upload}  alt="" className="w3-left w3-circle w3-margin-right" width="50%" />
        )
      },
      {
        title: " memberID",
        dataIndex: "MemberID",
        key: "id",
       
      },
    {
      title: "จัดการ",
      dataIndex: "Manage",
      key: "manage",
      render: (text, record, index) => (
        <>
          <Button
            onClick={() => showModal(record)}
            style={{ marginLeft: 10 }}
            shape="circle"
            icon={<DeleteOutlined />}
            size={"large"}
            danger
          />
        </>
      ),
    },
  ];

  const navigate = useNavigate();

  const [payments, setPayments] = useState<PaymentsInterface[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  // Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteId, setDeleteId] = useState<Number>();

  const getPayments = async () => {
    let res = await GetPayments();
    if (res) {
      setPayments(res);
    }
  };

  const showModal = (val: PaymentsInterface) => {
    setModalText(
      `คุณต้องการลบข้อมูลผู้ใช้ " ${val.ID}" หรือไม่ ?`
    );
    setDeleteId(val.ID);
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    let res = await DeletePaymentByID(deleteId);
    if (res) {
      setOpen(false);
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      GetPayments();
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
    getPayments();
  }, []);

  return (
    <>
      {contextHolder}
      <Row>

        <Col span={12}>
          <h2>จัดการข้อมูล Payment</h2>
        </Col>
       
      </Row>
      <Divider />
      <div style={{ marginTop: 20 }}>
        <Table rowKey="ID" columns={columns} dataSource={payments} pagination={{ pageSize: 3}} size="large"/>
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

export default Payments;