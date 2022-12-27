import React from 'react';
import Block from "./Block";

const BlocksRow = ({networks}) => {
    const renderBlocks = () => {
        return networks.map((network, index) => <Block network={network} key={index}/>);
    }
    return (
        <div className="blocks-container">
            {renderBlocks()}
        </div>
    );
};

export default BlocksRow;