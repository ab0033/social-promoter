import React from 'react';
import Welcome from "./Welcome";
import BlocksGrid from "./BlocksGrid";
import Proposition from "./Proposition";
import License from "./License";
import PackageGrid from "./PackageGrid";

const Home = () => {
    return (
        <div>
            <Welcome/>
            <BlocksGrid/>
            <PackageGrid/>
            <Proposition/>
            <License/>
        </div>
    );
};

export default Home;