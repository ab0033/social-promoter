import './App.css';
import OrderForm from "./components/OrderForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import CryptoPaymentForm from "./components/CryptoPaymentForm";
import NavBar from "./components/NavBar";
import LicensePage from "./components/LicensePage";
import ThankYouPage from "./components/ThankYouPage";
import Paypal from "./components/Paypal";


function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="payment" element={<OrderForm/>}/>
                    <Route path="cryptopaymentform" element={<CryptoPaymentForm/>}/>
                    <Route path="license" element={<LicensePage/>}/>
                    <Route path="thankyou" element={<ThankYouPage/>}/>
                    <Route path="paypal" element={<Paypal/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
