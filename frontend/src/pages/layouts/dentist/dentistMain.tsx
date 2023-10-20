// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
// content
import Main from '../../Main/main';
import Dentral from '../../service';


function DentistMain(){
    return (
        <>
        
            <div>
                <NavbarDentist />
                <Menu />
                <Main />
            </div>
        </>
    )
}
export default DentistMain