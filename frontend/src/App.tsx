import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/login/login';
import Register from './pages/register/register';
import Menu from './Components/menu/menu';

// Member
import NavbarMember from './Components/navbar/navbarMember';


// Dentist
import NavbarDentist from './Components/navbar/navbarDentist';

// Admin
import NavbarAdmin from './Components/navbar/navbarAdmin';


// History

// Layout


//Service
import Service from './pages/service';


//Payment
import PromptPay from './pages/layouts/member/payment/memberprom';
import Cards from './pages/layouts/member/payment/membercard';
import Payment from './pages/layouts/member/payment/memberservice'
import Success from './pages/layouts/member/payment/membersuccess'
import Showpayment from "./pages/layouts/admin/payment/showpayment";
function App() {
  return (
    <>
       <Router>
         <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/NavbarAdmin" element={<NavbarAdmin  />} />
              <Route path="/NavbarDestist" element={<NavbarDentist  />} />

              {/* Payment */}
              <Route path="/service" element={<Payment />} />
              <Route path="/Card" element={<Cards />}/>
              <Route path="/PromptPay" element={<PromptPay />}/>
              <Route path="/success" element={<Success />}/>  
              <Route path="/showpayment" element={<Showpayment />} />
         </Routes>
       </Router>
    </>
        
  );
}

export default App;
