// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminMember from '../../../../profile/admin/member/adminMember';




function AdminMemberData(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminMember />
                
                
            </div>
        </>
    )
}
export default AdminMemberData