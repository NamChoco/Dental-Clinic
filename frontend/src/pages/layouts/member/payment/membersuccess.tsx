// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import Success from '../../../payments/success';


function Membersuccess(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <Success />
                
                
            </div>
        </>
    )
}
export default Membersuccess