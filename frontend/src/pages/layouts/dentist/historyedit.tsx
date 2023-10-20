import HistoryEdit from "../../history/edit";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu

import DentistMenu from '../../../Components/menu/dentistManu';
// content






function DentistHistoryEdit(){
    return (
        <>
            <div>
                <NavbarDentist/>
                <DentistMenu />
                <div style={{ margin: '40px'}}>
                <HistoryEdit />
                </div>
                
            </div>
        </>
    )
}
export default DentistHistoryEdit