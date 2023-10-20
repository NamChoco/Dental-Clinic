// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import Memberhistory from '../../../history/user';



function MemberHistory(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <div style={{ margin: '40px'}}> 
                <Memberhistory/>
                </div>
                
            </div>
        </>
    )
}
export default MemberHistory