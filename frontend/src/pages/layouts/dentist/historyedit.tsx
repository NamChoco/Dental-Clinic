import HistoryEdit from "../../history/edit";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
// content






function DentistHistoryEdit(){
    return (
        <>
            <div>
                <NavbarDentist/>
                <Menu />
                <div style={{ margin: '40px'}}>
                <HistoryEdit />
                </div>
                
            </div>
        </>
    )
}
export default DentistHistoryEdit