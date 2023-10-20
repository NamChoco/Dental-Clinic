// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminEditDentistProfile from '../../../../profile/admin/dentist/edit/adminDentistEdit';





function AdminEditDentist(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminEditDentistProfile />
                
                
            </div>
        </>
    )
}
export default AdminEditDentist