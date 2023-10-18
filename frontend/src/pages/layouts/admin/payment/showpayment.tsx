// navbar
import NavbarAdmin from '../../../../Components/navbar/navbarAdmin';
//Menu
import Menu from '../../../../Components/menu/menu';
// content

import Show from '../../../payments/showpayment';




function Adminshowpayment(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <Show />
                
                
            </div>
        </>
    )
}
export default Adminshowpayment