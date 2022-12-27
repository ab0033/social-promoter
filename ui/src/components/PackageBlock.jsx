import React from 'react';
import '../css/PackageBlock.css';
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

const PackageBlock = ({pacContent}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/payment",
            {
                state: {
                    price: pacContent.price,
                    isAmountVisible: false,
                    amountValue: 1
                }
            })
    }

    return (
        <Tooltip title="Choose your package" followCursor>
            <div className="package-block-container" onClick={handleClick}>
                <div className="package-block-top-title">
                    <p className="package-block-top-title-text">
                        {pacContent.title}
                    </p>
                </div>
                <div className="package-block-price">
                    <p className="package-block-price-text">
                        {pacContent.renderPrice}
                    </p>
                </div>
                <div className="package-block-discount">
                    <p>
                        <span className="discount-span">{pacContent.discount}</span> discount
                    </p>
                </div>
                <div className="package-block-description">
                    <p className="package-block-description-text">
                        {pacContent.description}
                    </p>
                </div>
            </div>
        </Tooltip>
    );
};

export default PackageBlock;