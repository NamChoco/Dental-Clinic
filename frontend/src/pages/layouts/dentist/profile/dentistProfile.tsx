// navbar
import NavbarDentist from '../../../../Components/navbar/navbarDentist';
//Menu
import DentistMenu from '../../../../Components/menu/dentistManu';
// content
import DentistProfile from '../../../profile/dentist/dentistProfile';


function DProfile(){
    return (
        <>
        
            <div>
                <NavbarDentist />
                <DentistMenu />
                <DentistProfile />
            </div>
        </>
    )
}
export default DProfile