// navbar
import NavbarAdmin from "../../../../Components/navbar/navbarDentist";
//Menu
import Menu from "../../../../Components/menu/menu";
// content

import Navbarappointment from "../../../Appointment/Body";

function AdminshowAppointment() {
  return (
    <>
      <div>
        <NavbarAdmin />
        <Menu />
        <Navbarappointment />
      </div>
    </>
  );
}
export default AdminshowAppointment;
