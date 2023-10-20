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
                <div style={{ margin: '40px'}}>
                <HistoryCreate />
                </div>
                
            </div>
        </>
    )
}
export default DentistHistoryCreate