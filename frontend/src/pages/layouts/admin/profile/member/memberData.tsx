// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import AdminMenu from '../../../../../Components/menu/adminManu';
// content
import AdminMember from '../../../../profile/admin/member/adminMember';




function AdminMemberData(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <AdminMember />
                
                
            </div>
        </>
    )
}
export default AdminMemberData