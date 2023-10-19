// navbar
import NavbarAdmin from '../../../Components/navbar/navbarAdmin';
//Menu
import Menu from '../../../Components/menu/menu';
// content

import Dentral from '../../service';


function Adminservice(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Menu />
                <Dentral />
            </div>
        </>
    )
}
export default Adminservice