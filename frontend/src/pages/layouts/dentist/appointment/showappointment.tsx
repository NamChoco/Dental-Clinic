// navbar
import NavbarDentist from "../../../../Components/navbar/navbarDentist";
//Menu
import Menu from "../../../../Components/menu/menu";
import DentistMenu from "../../../../Components/menu/dentistManu";
// content

import Navbarappointment from "../../../Appointment/Body";

function AdminshowAppointment() {
  return (
    <>
      <div>
        <NavbarDentist />
        <DentistMenu />
        <Navbarappointment />
      </div>
    </>
  );
}
export default AdminshowAppointment;
