// navbar
import NavbarAdmin from '../../../Components/navbar/navbarAdmin';
//Menu
import Menu from '../../../Components/menu/menu';
import AdminMenu from '../../../Components/menu/adminManu';
// content
import Main from '../../Main/main'



function AdminMain(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <Main />
            </div>
        </>
    )
}
export default AdminMain