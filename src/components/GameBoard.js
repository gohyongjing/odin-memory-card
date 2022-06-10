import React, { useState } from 'react';
import DiamondImg from '../images/diamond-symbol.png';
import CircleImg from '../images/dry-clean.png';
import HeartImg from '../images/heart.png';
import HexagonImg from '../images/hexagon.png';
import PentagonImg from '../images/pentagon.png';
import TriangleImg from '../images/play.png';
import RibbonImg from '../images/ribbon-black-shape.png';
import SemicircleImg from '../images/semicircle.png';
import SquareImg from '../images/square.png';

const GameBoard = (props) => {
    const [pickedBefore, setPickedBefore] = useState([]);

    const images = [DiamondImg, CircleImg, HeartImg, HexagonImg, PentagonImg,
                    TriangleImg, RibbonImg, SemicircleImg, SquareImg];

    const getRandomisedCellIds = () => {
        const cellIds = [];
        const randomWeights = [];
        for (let id = 0; id < 9; id++) {
            cellIds.push(id);
            randomWeights.push(Math.random());
        }
        const shuffledIds = cellIds.sort((a, b) => randomWeights[a] - randomWeights[b]);
        return [shuffledIds.slice(0, 3),
                shuffledIds.slice(3, 6),
                shuffledIds.slice(6, 9)];
    };

    const handlePick = (cellId) => {
        let newPickedBefore = [cellId];
        for (const id of pickedBefore) {
            if (id === cellId) {
                newPickedBefore = [cellId];
                break;
            } else {
                newPickedBefore.push(id);
            }
        }
        setPickedBefore(newPickedBefore);
        props.setCurrScore(newPickedBefore.length);
        props.setHighScore(Math.max(newPickedBefore.length, props.highScore));
    }

    return (
        <div className='game-board'>
   
            {getRandomisedCellIds().map((row) => {
                return <div className='board-row'>{row.map((cellId) => {
                    return (
                        <img
                            src={images[cellId]}
                            alt={String(images[cellId])}
                            className='cell'
                            id={'cell-' + cellId}
                            onClick={() => {handlePick(cellId)}}
                        />
                    );
                })}</div>;
            })}
            Images taken from: 
            <a href="https://www.flaticon.com/free-icons/hexagon" title="hexagon icons">Hexagon icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/check-box" title="check box icons">Check box icons created by Roundicons Premium - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play icons created by Roundicons - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/ribbon" title="ribbon icons">Ribbon icons created by Freepik - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/rhombus" title="rhombus icons">Rhombus icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/circle" title="circle icons">Circle icons created by Freepik - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/pentagon" title="pentagon icons">Pentagon icons created by Roundicons Premium - Flaticon</a> 
            <a href="https://www.flaticon.com/free-icons/half-circle" title="half circle icons">Half circle icons created by Roundicons Premium - Flaticon</a>
        </div>
    );
};

export default GameBoard;