import React, {useEffect, useState} from 'react';
import '../css/BlockGrid.css';
import BlocksRow from "./BlocksRow";
import '../css/Block.css';
import '../css/Button.css';

const BlocksGrid = () => {

    const [events, setEvents] = useState([]);
    const rowLength = 3;
    useEffect(
        () => {
            fetch("http://localhost:8080/networks")
                .then(res => res.json())
                .then(res => {
                    setEvents(res);
                });
        }, []);

    const renderBlocksRow = (elements,key) => {
        return (
            <BlocksRow networks={elements} key={key}/>
        )
    }


    const renderBlocks = () => {
        let blocks = [];
        for (let i = 0; i < events.length; i += rowLength) {
            let sliced = events.slice(i, i + rowLength);
            blocks.push(
                renderBlocksRow(sliced,i)
            );
        }
        return blocks;
    }

    return (
        <div className="block-creator-div">
            {renderBlocks()}
        </div>
    );
};

export default BlocksGrid;