// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import Card from '../../../payments/card';



function Membercard(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <Card/>
                
                
            </div>
        </>
    )
}
export default Membercard