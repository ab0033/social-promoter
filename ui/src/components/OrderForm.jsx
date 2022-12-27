import React, {useEffect, useState} from 'react';
import '../css/OrderForm.css';
import '../css/Button.css';
import '../css/OrderButton.css';
import StarIcon from '@mui/icons-material/Star';
import PasswordIcon from '@mui/icons-material/Password';
import GppGoodIcon from '@mui/icons-material/GppGood';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import {useLocation, useNavigate} from "react-router-dom";

const OrderForm = () => {

        const navigate = useNavigate();
        const [total, setTotal] = useState(0);
        const [socialNetworkLink, setSocialNetworkLink] = useState('');
        const [email, setEmail] = useState('');
        const [selected, setSelected] = useState('btc');
        const state = useLocation().state || {
            state: {isAmountVisible: true, amountValue: 0, price: 0}
        };
        const {isAmountVisible, amountValue} = state;
        const [amount, setAmount] = useState(amountValue);
        const onSelectedChange = (event) => {
            setSelected(event.target.value);
        }

        const handlePlaceOrderClick = () => {
            if (selected === "paypal") {
                navigate("/paypal", {state: {total}});
            } else {
                navigate("/cryptopaymentform", {
                    state: {
                        paymentMethodValue: selected,
                        email,
                        socialNetworkLink,
                        total,
                        amount
                    }
                });
            }
        }

        const handleChangeLink = (event) => {
            setSocialNetworkLink(event.target.value);
        }

        const handleChangeAmount = (event) => {
            if (event.target.value < 20000) {
                setAmount(event.target.value);
            } else {
                setAmount("invalid amount")
            }
        }

        const handleChangeEmail = (event) => {
            setEmail(event.target.value);
        }

        useEffect(() => {
            let rounded = Number((amount * state.price).toFixed(1));
            setTotal((total) => rounded);
        }, [amount])


        return (
            <div className="order-form-main-div">
                <div className="order-div">
                    <div className="top-info-div">Checkout Information</div>
                    <div className="order-text-div">
                        <fieldset className="fieldset">
                            {
                                isAmountVisible &&
                                <div className="fieldset-div">
                                    <label className="form-label">Amount</label>
                                    <input
                                        value={amount}
                                        onChange={handleChangeAmount}
                                        placeholder="Amount"
                                        className="form-control"/>
                                </div>
                            }
                            <div className="fieldset-div">
                                <label className="form-label">Link to Post</label>
                                <input
                                    value={socialNetworkLink}
                                    onChange={handleChangeLink}
                                    placeholder="Link to Post"
                                    className="form-control"/>
                            </div>
                            <div className="fieldset-div">
                                <label className="form-label">Email Address</label>
                                <input
                                    value={email}
                                    onChange={handleChangeEmail}
                                    placeholder="Email Address"
                                    className="form-control"/>
                            </div>
                            <div className="fieldset-div">
                                <label className="form-label">Payment Method</label>
                                <select className="select-wrapper" value={selected} onChange={onSelectedChange}>
                                    <option value={"btc"}>BTC</option>
                                    <option value={"usdt"}>USDT-TRC</option>
                                    <option value={"eth"}>ETH</option>
                                    <option value={"paypal"}>Paypal</option>
                                </select>
                            </div>
                            <div>
                                <p>
                                    Note: Click on <span style={{color: "red"}}> Return to Shop (Merchant)</span> after
                                    completing the payment successfully
                                </p>
                            </div>
                        </fieldset>
                    </div>
                    <div className="order-button-div">
                        <button className="button-73" onClick={handlePlaceOrderClick}>Place Order</button>
                    </div>

                </div>


                <div className="summary-div">
                    <div className="top-info-div">Order Summary</div>
                    <div className="text-info-div">
                        <p className="icon-text">
                            <StarIcon className="icon-color"/>
                            Top Service
                        </p>
                        <p className="icon-text">
                            <PasswordIcon className="icon-color"/>
                            No Registration Needed
                        </p>
                        <p className="icon-text">
                            <FlashOnIcon className="icon-color"/>
                            Fast Delivery
                        </p>
                        <p className="icon-text">
                            <GppGoodIcon className="icon-color"/>
                            Safe and Easy
                        </p>
                        <p className="icon-text">
                            <SupportAgentIcon className="icon-color"/>
                            High Quality Feedback
                        </p>
                        <p className="icon-text">
                            <SecurityIcon className="icon-color"/>
                            Secure Payments
                        </p>
                    </div>

                    <div className="count-div">
                        <p className="count-div-text">Total Amount</p>
                        $ : {total}
                    </div>
                </div>

            </div>
        );
    }
;

export default OrderForm;