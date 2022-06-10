import React from 'react';

const ScoreBoard = (props) => {
    return (
        <div className='score-board'>
            <div>Current Score: {props.currScore}</div>
            <div>High Score: {props.highScore}</div>
        </div>
    );
};

export default ScoreBoard;