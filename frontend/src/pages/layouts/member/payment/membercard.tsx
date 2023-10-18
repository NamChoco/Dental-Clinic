// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import Card from '../../../payments/card';



function Membercard(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <Card/>
                
                
            </div>
        </>
    )
}
export default Membercard