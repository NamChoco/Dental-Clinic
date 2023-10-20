// navbar
import NavbarDentist from "../../../../Components/navbar/navbarDentist";
//Menu
import Menu from "../../../../Components/menu/menu";
// content
import Navbarshowrecord from "../../../ShowRecord/index";

function AdminshowRecord() {
  return (
    <>
      <div>
        <NavbarDentist />
        <Menu />
        <Navbarshowrecord />
      </div>
    </>
  );
}
export default AdminshowRecord;
