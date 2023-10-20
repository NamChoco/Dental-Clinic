// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminEditDentistProfile from '../../../../profile/admin/dentist/edit/adminDentistEdit';





function AdminEditDentist(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminEditDentistProfile />
                
                
            </div>
        </>
    )
}
export default AdminEditDentist