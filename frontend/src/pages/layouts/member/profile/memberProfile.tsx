// navbar
import NavbarMember from "../../../../Components/navbar/navbarMember";
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content

import MemberProfile from "../../../profile/member/memberProfile";

function MProfile() {
  return (
    <>
      <div>
        <NavbarMember />
        <MemberMenu />
        <MemberProfile />
      </div>
    </>
  );
}
export default MProfile;
