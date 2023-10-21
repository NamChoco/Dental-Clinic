import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Menu from "./Components/menu/menu";

// Member
import MemberMain from "./pages/layouts/member/payment/memberMain";
import MProfile from "./pages/layouts/member/profile/memberProfile";
import MProfileEdit from "./pages/layouts/member/profile/edit/memberProfileEdit";

// Dentist
import DentistMain from "./pages/layouts/dentist/dentistMain";
import DProfile from "./pages/layouts/dentist/profile/dentistProfile"
import DProfileEdit from "./pages/layouts/dentist/profile/edit/dentistProfileEdit";

// Admin
import NavbarAdmin from "./Components/navbar/navbarAdmin";
import AdminMain from "./pages/layouts/admin/adminMain";
import AdminDentistData from "./pages/layouts/admin/profile/dentist/dantistData";
import AdCreateDentist from "./pages/layouts/admin/profile/dentist/createDentist";
import AdminEditDentist from "./pages/layouts/admin/profile/dentist/editDentist";
import AdminMemberData from "./pages/layouts/admin/profile/member/memberData";
import AdCreateMember from "./pages/layouts/admin/profile/member/createMember";
import AdminEditMember from "./pages/layouts/admin/profile/member/editMember";

// History
import DentistHistory from "./pages/layouts/dentist/history";
import DentistHistoryEdit from "./pages/layouts/dentist/historyedit";
import DentistHistoryCreate from "./pages/layouts/dentist/hitorycreate";
import MemberHistory from "./pages/layouts/member/history/memberhistory";
import HistoryAdmin from "./pages/layouts/admin/history";

// Layout

//Service
import Service from "./pages/service";

//Payment
import PromptPay from "./pages/layouts/member/payment/memberprom";
import Cards from "./pages/layouts/member/payment/membercard";
import Payment from "./pages/layouts/member/payment/memberservice";
import Success from "./pages/layouts/member/payment/membersuccess";
import Showpayment from "./pages/layouts/admin/payment/showpayment";
import NavbarAppointment from "./pages/layouts/dentist/appointment/showappointment";
import NavbarShowrecord from "./pages/layouts/dentist/appointment/showdentist";
import NavbarShowmember from "./pages/layouts/member/showmember/showmember";
import Datacontact from "./pages/layouts/dentist/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* หน้าแรก admin */}
          <Route path="/serviceAdmin" element={<AdminMain />} />
          {/* หน้าแรก dentist */}
          <Route path="/serviceDentist" element={<DentistMain />} />
          {/* Menu */}
          <Route path="/contact" element={<Datacontact />} />
          {/* Payment */}
          <Route path="/serviceMember" element={<MemberMain />} />
          <Route path="/service" element={<Payment />} />
          <Route path="/Card" element={<Cards />} />
          <Route path="/PromptPay" element={<PromptPay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/showpayment" element={<Showpayment />} />
          {/* History */}

          <Route path="/history" element={<DentistHistory />} />
          <Route path="/history/edit/:id" element={<DentistHistoryEdit />} />
          <Route path="/history/create" element={<DentistHistoryCreate />} />
          <Route path="/memberhistory" element={<MemberHistory />} />
          <Route path="/adminhistory" element={<HistoryAdmin />} />

          <Route path="/admin/data/dentist" element={<AdminDentistData />} />
          <Route path="/admin/create/dentist" element={<AdCreateDentist />} />
          <Route path="/admin/dentist/edit/:username"  element={<AdminEditDentist />}/>
          <Route path="/admin/data/member" element={<AdminMemberData />} />
          <Route path="/admin/create/member" element={<AdCreateMember />} />
          <Route path="/admin/member/edit/:username"element={<AdminEditMember />}/>
          <Route path="/dentist/profile/:username"element={<DProfile />}/>
          <Route path="/dentist/profile/:username/edit"element={<DProfileEdit />}/>
          <Route path="/member/profile/:username"element={<MProfile />}/>
          <Route path="/member/profile/:username/edit"element={<MProfileEdit />}/>

          <Route path="/dentApp" element={<NavbarAppointment />} />
          <Route path="/dentRecord" element={<NavbarShowrecord />} />
          <Route path="/memberRecord" element={<NavbarShowmember />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
