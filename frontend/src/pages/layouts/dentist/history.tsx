import History from "../../history";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
import DentistMenu from '../../../Components/menu/dentistManu';
// content






function DentistHistory(){
    return (
        <>
            <div >
                <NavbarDentist/>
                <DentistMenu />
                <div style={{ margin: '40px'}}> 
                <History />   
                </div>
            </div>
        </>
    )
}
export default DentistHistory