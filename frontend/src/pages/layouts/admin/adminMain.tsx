// navbar
import NavbarAdmin from '../../../Components/navbar/navbarAdmin';
//Menu
import Menu from '../../../Components/menu/menu';
// content
import Main from '../../Main/main'



function AdminMain(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <Main />
            </div>
        </>
    )
}
export default AdminMain