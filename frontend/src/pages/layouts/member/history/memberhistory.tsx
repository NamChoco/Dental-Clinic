// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import Memberhistory from '../../../history/user';



function MemberHistory(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <div style={{ margin: '40px'}}> 
                <Memberhistory/>
                </div>
                
            </div>
        </>
    )
}
export default MemberHistory