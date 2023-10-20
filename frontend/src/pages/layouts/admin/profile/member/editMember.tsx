// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminEditMemberProfile from '../../../../profile/admin/member/edit/adminMemberEdit';





function AdminEditMember(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminEditMemberProfile />
                
                
            </div>
        </>
    )
}
export default AdminEditMember