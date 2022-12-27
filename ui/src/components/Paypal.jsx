import React, {useState} from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useLocation, useNavigate} from "react-router-dom";
import '../css/Paypal.css';
import '../css/Button.css';
import '../css/OrderButton.css';
import axios from "axios";

const Paypal = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {paymentMethodValue,email,total,socialNetworkLink,amount} = state;
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleClick = async () => {
        await axios.post("http://localhost:8080/payment", JSON.stringify({total, email, socialNetworkLink,amount}), axiosConfig)
            .then(() => navigate('/thankyou'))
            .catch((error) => {
                alert(error.response.data.errorMessages[0]);
            })
    }

    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Promotion",
                        amount: {
                            currency_code: "USD",
                            value: total,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        }.then(handleClick()));

    };

    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    return (
        <PayPalScriptProvider
            options={{
                "client-id":"AWS72YSwUSqArFFlmihFThM8HQP0ofg-_0V6mHK6JPp7F-0QpRgxiYjKDK7A6l53CTtst0q31mNYMIiC",
            }}
        >
                <div className="paypal-wrapper">
                    <div className="product-img">
                        <img
                            src="/paypalpic.jpg"
                            alt="SunFlower"
                            height="380"
                            width="280"
                        />
                    </div>
                    <div className="product-info">
                            <h1 className="paypal-title">Promote Yourself</h1>
                            <h2 className="paypal-title2">Fast response</h2>

                        <div className="product-price-btn">
                            <p>
                                <span className="paypal-span">$ : {total}</span>
                            </p>
                            <button className="button-73" type="submit" onClick={() => setShow(true)}>
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                {show ? (
                    <PayPalButtons
                        className="paypal-buttons"
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                    />
                ) : null}

        </PayPalScriptProvider>
    );
};

export default Paypal;