import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Menu from "./Components/menu/menu";

// Member
import NavbarMember from "./Components/navbar/navbarMember";
import Memberservice from "./pages/layouts/member/payment/memberservice";

// Dentist
import NavbarDentist from "./Components/navbar/navbarDentist";
import Dentistservice from "./pages/layouts/dentist/dentistservice";

// Admin
import NavbarAdmin from "./Components/navbar/navbarAdmin";
import Adminservice from "./pages/layouts/admin/adminservice";

// History
import DentistHistory from "./pages/layouts/dentist/history";
import DentistHistoryEdit from "./pages/layouts/dentist/historyedit";
import DentistHistoryCreate from "./pages/layouts/dentist/hitorycreate";
import MemberHistory from "./pages/layouts/member/history/memberhistory";

// Layout

//Service
import Service from "./pages/service";

//Payment
import PromptPay from "./pages/layouts/member/payment/memberprom";
import Cards from "./pages/layouts/member/payment/membercard";
// import Payment from './pages/layouts/member/payment/memberservice'
import Success from "./pages/layouts/member/payment/membersuccess";
import Showpayment from "./pages/layouts/admin/payment/showpayment";
import NavbarAppointment from "./pages/layouts/admin/appointment/showappointment";
import NavbarShowrecord from "./pages/layouts/admin/appointment/showdentist";
import NavbarShowmember from "./pages/ShowMember/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* หน้าแรก admin */}
          <Route path="/serviceAdmin" element={<Adminservice />} />
          {/* หน้าแรก dentist */}
          <Route path="/serviceDentist" element={<Dentistservice />} />

          {/* Payment */}
          <Route path="/service" element={<Memberservice />} />
          <Route path="/Card" element={<Cards />} />
          <Route path="/PromptPay" element={<PromptPay />} />
          <Route path="/success" element={<Success />} />
          <Route path="/showpayment" element={<Showpayment />} />
          {/* History */}

          {/* <Route path="/history" element={<DentistHistory />} /> */}
          {/* <Route path="/history/edit/:id" element={<DentistHistoryEdit />} /> */}
          {/* <Route path="/history/create" element={<DentistHistoryCreate />} /> */}
          {/* <Route path="/memberhistory" element={<MemberHistory />} /> */}

          <Route path="/dentApp" element={<NavbarAppointment />} />
          <Route path="/dentRecord" element={<NavbarShowrecord />} />
          <Route path="/memberRecord" element={<NavbarShowmember />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
