// navbar
import NavbarDentist from '../../../../../Components/navbar/navbarDentist';
//Menu
import DentistMenu from '../../../../../Components/menu/dentistManu';
// content
import DentistEditProfile from '../../../../profile/dentist/edit/editProfile';


function DProfileEdit(){
    return (
        <>
        
            <div>
                <NavbarDentist />
                <DentistMenu />
                <DentistEditProfile />
            </div>
        </>
    )
}
export default DProfileEdit