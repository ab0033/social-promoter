import React from 'react';
import '../css/Welcome.css';
import {Link as Scroll} from 'react-scroll';
import {IconButton} from "@mui/material";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-main-text-div">
                <div className="welcome-main-text-container">
                    <p className="welcome-main-text">
                        Improve Your Social Popularity
                    </p>
                </div>
            </div>
            <div className="welcome-sec-div">
                <p className="welcome-secondary-text">
                    The perfect growth instrument for your Social Networks. Our service help you to outrank your competitors from any place.
                    Grow your social network and fanbase now!
                </p>
            </div>
            <p className="welcome-proposition">Onlyfans special offer</p>
            <Scroll to="banner" smooth={true}>

                <IconButton>
                    <ArrowDropDownCircleIcon/>
                </IconButton>
            </Scroll>

        </div>
    );
};

export default Welcome;