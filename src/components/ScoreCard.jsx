import React, { useState } from 'react'
import Innings from './Innings';

function ScoreCard() {

  // const [activeInning, setActiveInning] = useState(1)

  return (
    <div>
      <div className="scoreCard">
        {/* <button onClick={() => setActiveInning(1)} className={`tab tab-lifted ${activeInning===1 ? 'tab-active' : ''}`}>1st Innings</button>
        <button onClick={() => setActiveInning(2)} className={`tab tab-lifted ${activeInning===2 ? 'tab-active' : ''}`}>2nd Innings</button> */}
        <Innings/>
      </div>
    </div>
  );
}

export default ScoreCard