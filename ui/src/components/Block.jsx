import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, CardContent, CardMedia} from "@mui/material";
import socialNetworks from "../utils/socialNetworks";

const Block = ({network}) => {
    const navigate = useNavigate();
    const renderOffer = (offer) => {
        return (
            <button
                key={offer.eventName}
                onClick={() => navigate("/payment",
                    {state:{
                            price:offer.price,
                            isAmountVisible:true,
                            amountValue:0
                        }}
                )}
                className="button-25">{offer.eventName}
            </button>
        )
    }

    return (
        <div className="div-content-wrapper">
            <Card className="card">
                <CardMedia
                    className="cardMedia"
                    image={socialNetworks[network.name].imageUrl}>
                </CardMedia>
                <CardContent className="cardContent">
                    <p className="name-wrapper">{socialNetworks[network.name].name}</p>
                    <div>
                        {
                            network.eventTypes.map(offer => {
                                return renderOffer(offer);
                            })
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default Block;