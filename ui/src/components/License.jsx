import React from 'react';
import '../css/License.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const License = () => {
    return (
        <div className="license-main-div">
            <div className="license-agreement">
                <a href={"http://localhost:3000/license"} className="license-div-text">
                    User Agreement and Privacy Policy<br/>
                </a>
                <p className="license-div-text"><CopyrightIcon className="license-icon"/>2019-2022. Promoter. All rights reserved</p>
            </div>
            <div className="license-contacts">
                <p className="license-big-text">
                    Contact Information
                </p>
                <p className="license-text">Tel: + 38 066 444 44 44</p>
                <p className="license-text">E-mail: promoterservice@gmail.com</p>
                <p className="license-text">Working Hours: Mon - Sat 7 am - 7 pm</p>
            </div>

        </div>
    );
};

export default License;