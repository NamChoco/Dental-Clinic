// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminCreateDentist from '../../../../profile/admin/dentist/create/adminCreateDentist';





function AdCreateDentist(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminCreateDentist />
                
                
            </div>
        </>
    )
}
export default AdCreateDentist