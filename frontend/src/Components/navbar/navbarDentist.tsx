import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import Cookies from "js-cookie";
import "./navbarV2CSS.css";
import profileDentist from "./../../photo/dental-care.png";

import { Layout } from "antd";
function NavbarDentist() {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit2 = async () => {
    Cookies.remove("usernameDentist");

    if (true) {
      messageApi.open({
        type: "success",
        content: "Logout Dentist Success",
      });
      setTimeout(function () {
        navigate("/");
      }, 2000);
    }
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
                  <Link to="">หมอ</Link>
                  <ul>
                    <li>
                      <Link to="">โปรไฟล์</Link>
                    </li>
                    <li>
                      <Link to="/history">ประวัติการรักษา</Link>
                    </li>
                    <li>
                      <Link to="/dentapp">นัดหมาย</Link>
                    </li>
                    <li>
                      <Link to="/dentrecord">ประวัตินัดหมาย</Link>
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
        <div className="box"></div>
      </Layout>
    </>
  );
}
export default NavbarDentist;
