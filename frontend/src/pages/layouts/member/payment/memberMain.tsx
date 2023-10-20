// navbar
import NavbarMember from '../../../../Components/navbar/navbarMember';
//Menu
import Menu from '../../../../Components/menu/menu';
// content
import Main from '../../../Main/main'



function MemberMain(){
    return (
        <>
            <div>
                <NavbarMember />
                <Menu />
                <Main />
            </div>
        </>
    )
}
export default MemberMain