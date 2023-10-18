// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import Success from '../../../payments/success';


function Membersuccess(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <Success />
                
                
            </div>
        </>
    )
}
export default Membersuccess