
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
import DentistMenu from '../../../Components/menu/dentistManu';
import DataDisplayPage from "../../contact/contact";
// content






function Datacontact(){
    return (
        <>
            <div >
                <NavbarDentist/>
                <DentistMenu />
                <div style={{ margin: '40px'}}> 
                <DataDisplayPage />   
                </div>
            </div>
        </>
    )
}
export default Datacontact