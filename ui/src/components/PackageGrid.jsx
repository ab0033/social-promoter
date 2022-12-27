import React from 'react';
import '../css/PackageGrid.css';
import packageBlocks from "../utils/packageBlocks";
import PackageBlock from "./PackageBlock";

const PackageGrid = () => {
    return (
        <div className="package-container">
            <div id="banner" className="package-banner">
                <p className="package-title-text">Promote your OnlyFans</p>
            </div>
            <div className="package-main-div">
                <div className="package-pic-div"></div>
                <div>
                    <p className="package-title-text2">Special OnlyFans proposition</p>
                </div>
                <div className="package-div-text">
                    <p className="package-main-text">All of the Onlyfans subs are real and active people. We never use fake
                        accounts.

                        Our first goal is to get a completely organic interaction. We use a special bot, which search
                        accounts from other pages.

                        The accounts may continue to be active, agree on payed subscription and be completely involved in
                        your content.

                        Amount of such accounts is limited per day. Choose your package to have stable promotion.
                    </p>
                </div>
                <div className="package-banners-div">
                    <PackageBlock pacContent={packageBlocks[0]}/>
                    <PackageBlock pacContent={packageBlocks[1]}/>
                    <PackageBlock pacContent={packageBlocks[2]}/>
                </div>
            </div>
        </div>

    );
};

export default PackageGrid;