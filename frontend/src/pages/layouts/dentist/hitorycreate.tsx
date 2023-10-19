import HistoryCreate from "../../history/create";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
// content






function DentistHistoryCreate(){
    return (
        <>
            <div>
                <NavbarDentist/>
                <Menu />
                <HistoryCreate />
                
                
            </div>
        </>
    )
}
export default DentistHistoryCreate