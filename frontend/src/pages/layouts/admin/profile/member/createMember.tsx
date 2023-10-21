// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminCreateMember from '../../../../profile/admin/member/create/adminCreateMember';





function AdCreateMember(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminCreateMember />
                
                
            </div>
        </>
    )
}
export default AdCreateMember