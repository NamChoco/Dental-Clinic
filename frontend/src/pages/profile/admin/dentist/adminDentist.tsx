import React, { FC, useState, useEffect } from "react";
import { Table, Button, Row, Col, Divider, Card, Modal, message } from "antd";
import { DentistsInterface } from "../../../../interfaces/IDentist";
import { Link, useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import {
  GetDentist,
  DeleteDentistByUsername,
} from "../../../../services/https";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import NavbarAdmin from "../../../../Components/navbar/navbarAdmin";
import Menu from "../../../../Components/menu/menu";

const AdminDentist: FC = () => {
  const columns: ColumnsType<DentistsInterface> = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "id",
    },
    {
      title: "ชื่อบัญชี",
      dataIndex: "Username",
      key: "username",
    },
    {
      title: "รหัสผ่าน",
      dataIndex: "Password",
      key: "password",
    },
    {
      title: "ชื่อ",
      dataIndex: "FirstName",
      key: "firstname",
    },
    {
      title: "นามสกุล",
      dataIndex: "LastName",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
    },
    {
      title: "เพศ",
      dataIndex: "Gender",
      key: "gender",
      render: (text, item, index) => item.Gender?.Name,
    },
    {
      title: "วันเกิด",
      dataIndex: "Birthday",
      key: "birthday",
      render: (text: string) => dayjs(text).format("DD/MM/YYYY"),
    },
    {
      title: "เบอร์โทรศัพท์",
      dataIndex: "Phone_number",
      key: "phone",
    },
    {
      title: "จัดการ",
      dataIndex: "Manage",
      key: "manage",
      render: (text, record, index) => (
        <>
          <Button
            onClick={() => navigate(`/admin/dentist/edit/${record.Username}`)}
            shape="circle"
            icon={<EditOutlined />}
            size={"large"}
          />
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

  const [dentists, setDentists] = useState<DentistsInterface[]>([]);
  //Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteUsername, setDeleteUsername] = useState<string>();

  const [messageApi, contextHolder] = message.useMessage();

  const getDentists = async () => {
    let res = await GetDentist();
    console.log(res);

    if (res) {
      setDentists(res);
    }
  };

  const showModal = (val: DentistsInterface) => {
    setModalText(
      `คุณต้องการลบข้อมูลผู้ใช้ "${val.FirstName} ${val.LastName}" หรือไม่ ?`
    );
    setDeleteUsername(val.Username);
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    let res = await DeleteDentistByUsername(deleteUsername);
    if (res) {
      setOpen(false);
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      getDentists();
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
    getDentists();
  }, []);

  return (
    <div className="AdminDentistData">
      {contextHolder}
      <Card style={{ height: "50vh" , marginTop: "0px"}}>
        <Card>
          <Row>
            <Col
              span={22}
              style={{ textAlign: "start", justifyItems: "center" }}
            >
              <h2>ข้อมูลทันตแพทย์</h2>
            </Col>

            <Col
              span={2}
              style={{
                justifyContent: "end",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/admin/create/dentist">
                <Button type="primary" icon={<PlusOutlined />}>
                  เพิ่มข้อมูล
                </Button>
              </Link>
            </Col>
          </Row>
          <Divider />
          <div style={{ marginTop: "20px" }}>
            <Table
              style={{ width: "100%" }}
              rowKey="ID"
              columns={columns}
              dataSource={dentists}
              pagination={{ pageSize: 3 }}
              size="small"
            />
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
        </Card>
      </Card>
    </div>
  );
};

export default AdminDentist;
