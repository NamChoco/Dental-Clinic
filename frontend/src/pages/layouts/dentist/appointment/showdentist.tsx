// navbar
import NavbarAdmin from "../../../../Components/navbar/navbarDentist";
//Menu
import Menu from "../../../../Components/menu/menu";
// content
import Navbarshowrecord from "../../../ShowRecord/index";

function AdminshowRecord() {
  return (
    <>
      <div>
        <NavbarAdmin />
        <Menu />
        <Navbarshowrecord />
      </div>
    </>
  );
}
export default AdminshowRecord;
