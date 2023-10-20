// navbar
import NavbarDentist from "../../../../Components/navbar/navbarDentist";
//Menu

import DentistMenu from "../../../../Components/menu/dentistManu";
// content
import Navbarshowrecord from "../../../ShowRecord/index";

function AdminshowRecord() {
  return (
    <>
      <div>
        <NavbarDentist />
        <DentistMenu />
        <Navbarshowrecord />
      </div>
    </>
  );
}
export default AdminshowRecord;
