// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import Dentral from '../../../service';


function Memberservice(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <Dentral />
                
            </div>
        </>
    )
}
export default Memberservice