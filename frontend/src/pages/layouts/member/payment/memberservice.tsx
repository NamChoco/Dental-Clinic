// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import Dentral from '../../../service';


function Memberservice(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <Dentral />
                
            </div>
        </>
    )
}
export default Memberservice