// navbar
import NavbarMember from "../../../../Components/navbar/navbarMember";
//Menu
import Menu from "../../../../Components/menu/menu";
// content

import MemberRecord from "../../../ShowMember/index";

function ShowMember() {
  return (
    <>
      <div>
        <NavbarMember />
        <Menu />
        <MemberRecord />
      </div>
    </>
  );
}
export default ShowMember;
