import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import Cookies from "js-cookie";
import "./navbarV2CSS.css";
// import Logo from './../photos/tooth1.png';
import profileMember from "./../../photo/girl.png";

import { Layout } from "antd";
function NavbarMember() {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

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
                      <Link to="">โปรไฟล์</Link>
                    </li>
                    <li>
                      <Link to="/memberhistory">ประวัติการรักษา</Link>
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
