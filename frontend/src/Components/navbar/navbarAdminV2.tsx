import { Link } from "react-router-dom";
import Form from "antd/es/form/Form";
import "./navbarV2CSS.css";
function NavbarV2() {
  return (
    <>
      <div className="navbarMember-v2">
        <div className="navbar-v2">
          <div className="menu-v2">
            <ul>
              <li>
                <Link to="">แอดมิน</Link>
                <ul>
                  <li>
                    <Link to="">โปรไฟล์</Link>
                  </li>
                  <li>
                    <Link to="">ประวัติการรักษา</Link>
                  </li>
                  <li>
                    <Link to="">วันนัดหมาย</Link>
                  </li>
                  <li>
                    <Link to="">จัดการหมอ</Link>
                  </li>
                  <li>
                    <Link to="">ยืนยันการชำระเงิน</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div>
                  <Form>
                    <button type="submit">ล็อคเอ้า</button>
                  </Form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <p id="">The error message you’re encountering, EEXIST (File exists),<br/> typically occurs when npm is trying to rename a file,<br/> but there's already a file with the same name in the destination directory. This can happen for various reasons, including:</p> */}
    </>
  );
}
export default NavbarV2;
