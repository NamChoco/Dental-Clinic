// navbar
import NavbarMember from "../../../../Components/navbar/navbarMember";
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import MemberRecord from "../../../ShowMember/index";

function ShowMember() {
  return (
    <>
      <div>
        <NavbarMember />
        <MemberMenu />
        <MemberRecord />
      </div>
    </>
  );
}
export default ShowMember;
