// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import PromptPay from '../../../payments/promptpay';



function Membercard(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <PromptPay/>
                
                
            </div>
        </>
    )
}
export default Membercard