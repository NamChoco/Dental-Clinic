// navbar
import NavbarDentist from "../../../../Components/navbar/navbarDentist";
//Menu
import Menu from "../../../../Components/menu/menu";
// content

import Navbarappointment from "../../../Appointment/Body";

function AdminshowAppointment() {
  return (
    <>
      <div>
        <NavbarDentist />
        <Menu />
        <Navbarappointment />
      </div>
    </>
  );
}
export default AdminshowAppointment;
