// navbar
import NavbarAdmin from '../../../../Components/navbar/navbarAdmin';
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
import AdminMenu from '../../../../Components/menu/adminManu';
// content

import Show from '../../../payments/showpayment';




function Adminshowpayment(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <Show />
                
                
            </div>
        </>
    )
}
export default Adminshowpayment