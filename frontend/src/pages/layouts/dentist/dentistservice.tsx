// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
// content

import Dentral from '../../service';


function Dentistservice(){
    return (
        <>
            <div>
                <NavbarDentist />
                <Menu />
                <Dentral />
            </div>
        </>
    )
}
export default Dentistservice