import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import Home from './Pages/LandingPage'
import Payment from './Pages/Payment'
import Booking from './Pages/Booking'
import PaymentDone from './Pages/PaymentDone'
import { Routes, Route } from "react-router-dom";
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="payment" element={<Payment />} />
        <Route path="paymentdone" element={<PaymentDone />} />
      </Routes>
    </div>
  );
}

export default App;
