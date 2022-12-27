import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import '../css/CryptoPaymentForm.css';
import '../css/OrderButton.css';
import QRCode from "react-qr-code";
import axios from "axios";
import '../css/OrderForm.css';

const CryptoPaymentForm = () => {
    const {state} = useLocation();
    const navigate = useNavigate();

    const {paymentMethodValue,email,total,socialNetworkLink,amount} = state;
    const [cryptoDetails,setCryptoDetails] = useState({qr:''});


    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    useEffect(
        () => {
            fetch(`http://localhost:8080/crypto/${paymentMethodValue}`)
                .then(res => res.json())
                .then(res => {
                    setCryptoDetails(res);
                });
        }, []);

    const handleClick = async () => {
        await axios.post("http://localhost:8080/payment", JSON.stringify({total, email, socialNetworkLink,amount}), axiosConfig)
            .then(() => navigate('/thankyou'))
            .catch((error) => {
                alert(error.response.data.errorMessages[0]);
            })
    }
    return (
        <div className="main-div-wrapper">
            <div className="main-crypto-payment-form-div">
                <div className="top-wrapper">Payment Information</div>
                <div className="crypto-background-div">
                    <div className="div-with-link">{cryptoDetails.address}</div>
                    <div className="qr-div">
                        <p>Trust-Wallet QR Code</p>
                        <QRCode size={200} value={cryptoDetails.qr}/>
                    </div>
                </div>
                <div className="crypto-button-div">
                    <button className="button-73" onClick={handleClick}>Payed</button>
                </div>
            </div>
        </div>
    );
};

export default CryptoPaymentForm;