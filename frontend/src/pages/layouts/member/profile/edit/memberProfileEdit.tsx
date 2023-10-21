// navbar
import NavbarMember from "../../../../../Components/navbar/navbarMember";
//Menu
import MemberMenu from '../../../../../Components/menu/membertsx';
// content

import MemberEditProfile from "../../../../profile/member/edit/editProfile";

function MProfileEdit() {
  return (
    <>
      <div>
        <NavbarMember />
        <MemberMenu />
        <MemberEditProfile />
      </div>
    </>
  );
}
export default MProfileEdit;
