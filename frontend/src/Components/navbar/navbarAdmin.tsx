import { Link, useNavigate } from 'react-router-dom';
import { Form, message } from 'antd';
import Cookies from "js-cookie";
import './navbarV2CSS.css';

function NavbarAdmin() {
    let navigate = useNavigate();
    const [messageApi , contextHolder] = message.useMessage();

    const handleSubmit2 = async () => {
        Cookies.remove('usernameAdmin');
        
        if (true) {
            messageApi.open({
                type: "success",
                content: "Logout Admin Success",
            });
            setTimeout(function () {
                navigate("/");
            }, 2000);
        }
    }
    return (
        <>
        <div>
            {contextHolder}
            <div className='navbarMember-v2'>
                <div className='navbar-v2'>
                    <div className='menu-v2'>
                        <ul>
                            <li><Link to=''>แอดมิน</Link>
                                <ul>
                                    <li><Link to=''>ประวัติการรักษา</Link></li>
                                    <li><Link to=''>วันนัดหมาย</Link></li>
                                    <li><Link to='/admin/data/dentist'>จัดการหมอ</Link></li>
                                    <li><Link to='/admin/data/member'>จัดการสมาชิก</Link></li>
                                    <li><Link to='/showpayment'>ยืนยันการชำระเงิน</Link></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <Form onFinish={handleSubmit2}>
                                        <button type="submit" >LOG OUT</button>
                                    </Form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default NavbarAdmin