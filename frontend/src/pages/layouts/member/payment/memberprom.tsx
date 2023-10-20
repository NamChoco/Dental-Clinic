// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import PromptPay from '../../../payments/promptpay';



function Membercard(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <PromptPay/>
                
                
            </div>
        </>
    )
}
export default Membercard