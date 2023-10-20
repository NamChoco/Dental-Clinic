// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminCreateDentist from '../../../../profile/admin/dentist/create/adminCreateDentist';





function AdCreateDentist(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminCreateDentist />
                
                
            </div>
        </>
    )
}
export default AdCreateDentist