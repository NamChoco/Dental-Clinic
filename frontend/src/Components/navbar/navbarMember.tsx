import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import Cookies from "js-cookie";
import "./navbarV2CSS.css";
// import Logo from './../photos/tooth1.png';
import profileMember from "./../../photo/girl.png";

import { Layout } from "antd";
import { MembersInterface } from "../../interfaces/IMember";
import { useEffect, useState } from "react";
import { GetMemberByUsername } from "../../services/https";

function NavbarMember() {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const username = Cookies.get("usernameMember");
  const [member, setMember] = useState<MembersInterface>();
  
  const getMemberByUsername = async () => {
    let res = await GetMemberByUsername(username);
    console.log(res);
    if (res) {
      setMember(res);
    }
  }
  useEffect(() => {
    getMemberByUsername();
  }, []);

  const handleSubmit2 = async () => {
    Cookies.remove("usernameMember");

    if (true) {
      messageApi.open({
        type: "success",
        content: "Logout Member Success",
      });
      setTimeout(function () {
        navigate("/");
      }, 2000);
    }
  };
  const handleShowAppointment = () => {
    // คลิกดูประวัติการรักษา
    // ทำงานอื่น ๆ ที่คุณต้องการที่นี่
    // รีเฟรชหน้าเว็บในพาท /memberhistory
    window.location.href = "/memberRecord";
  };

  const handleViewHistory = () => {
    window.location.href = "/memberhistory";
  };

  return (
    <>
      <Layout>
        {contextHolder}
        <div className="navbarMember-v2">
          <div className="navbar-v2">
            <div className="menu-v2">
              <ul>
                <li>
                  <Link to="">สมาชิก</Link>
                  <ul>
                    <li>
                      <Link to={`/member/profile/${member?.Username}`}>โปรไฟล์</Link>
                    </li>
                    <li>
                      <Link to="/memberhistory" onClick={handleViewHistory}>
                        ดูประวัติการรักษา
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">บริการ</Link>
                    </li>
                    <li>
                      <Link to="/memberRecord" onClick={handleShowAppointment}>
                        นัดหมาย
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <Form onFinish={handleSubmit2}>
                      <button type="submit">LOG OUT</button>
                    </Form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default NavbarMember;
