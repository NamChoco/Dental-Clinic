import History from "../../history";
// navbar
import NavbarDentist from '../../../Components/navbar/navbarDentist';
//Menu
import Menu from '../../../Components/menu/menu';
// content






function DentistHistory(){
    return (
        <>
            <div >
                <NavbarDentist/>
                <Menu />
                <div style={{ margin: '40px'}}> 
                <History />   
                </div>
            </div>
        </>
    )
}
export default DentistHistory