// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminEditMemberProfile from '../../../../profile/admin/member/edit/adminMemberEdit';





function AdminEditMember(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminEditMemberProfile />
                
                
            </div>
        </>
    )
}
export default AdminEditMember