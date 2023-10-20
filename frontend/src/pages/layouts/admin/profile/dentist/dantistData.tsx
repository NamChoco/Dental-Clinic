// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminDentist from '../../../../profile/admin/dentist/adminDentist';





function AdminDentistData(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminDentist />
                
                
            </div>
        </>
    )
}
export default AdminDentistData