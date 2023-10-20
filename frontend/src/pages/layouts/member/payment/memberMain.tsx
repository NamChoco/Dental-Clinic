// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import MemberMenu from '../../../../Components/menu/membertsx';
// content
import Main from '../../../Main/main'



function MemberMain(){
    return (
        <>
            <div>
                <NavbarMember />
                <MemberMenu />
                <Main />
            </div>
        </>
    )
}
export default MemberMain