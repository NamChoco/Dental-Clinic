// navbar
import NavbarAdmin from '../../../Components/navbar/navbarAdmin';
//Menu
import Menu from '../../../Components/menu/menu';
import AdminMenu from '../../../Components/menu/adminManu';

import History from "../../history";


function HistoryAdmin(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <AdminMenu />
                <div style={{ margin: '40px'}}>
                <History />
                </div>
               
            </div>
        </>
    )
}
export default  HistoryAdmin