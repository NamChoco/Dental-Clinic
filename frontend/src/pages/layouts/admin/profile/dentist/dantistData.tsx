// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminDentist from '../../../../profile/admin/dentist/adminDentist';





function AdminDentistData(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminDentist />
                
                
            </div>
        </>
    )
}
export default AdminDentistData