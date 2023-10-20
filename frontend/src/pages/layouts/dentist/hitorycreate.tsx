import HistoryCreate from "../../history/create";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import DentistMenu from '../../../Components/menu/dentistManu';
// content






function DentistHistoryCreate(){
    return (
        <>
            <div>
                <NavbarDentist/>
                <DentistMenu />
                <div style={{ margin: '40px'}}>
                <HistoryCreate />
                </div>
                
            </div>
        </>
    )
}
export default DentistHistoryCreate