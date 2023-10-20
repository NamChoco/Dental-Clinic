// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
import DentistMenu from '../../../Components/menu/dentistManu';
// content
import Main from '../../Main/main';
import Dentral from '../../service';


function DentistMain(){
    return (
        <>
        
            <div>
                <NavbarDentist />
                <DentistMenu />
                <Main />
            </div>
        </>
    )
}
export default DentistMain