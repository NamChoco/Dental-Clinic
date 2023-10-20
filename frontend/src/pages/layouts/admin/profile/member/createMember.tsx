// navbar
import NavbarAdmin from '../../../../../Components/navbar/navbarAdmin';

//Menu
import Menu from '../../../../../Components/menu/menu';
// content
import AdminCreateMember from '../../../../profile/admin/member/create/adminCreateMember';





function AdCreateMember(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <AdminCreateMember />
                
                
            </div>
        </>
    )
}
export default AdCreateMember