import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import ScoreCard from '../components/ScoreCard'

function Game() {
    const [runs, setRuns] = useState(0)
    const [wickets, setWickets] = useState(0)

    const wicket = () => {
        setWickets(wickets+1)
    }

    const reset = () => {
        setRuns(0)
        setWickets(0)
    }

    return (
        <div className='pageBody'>
            <h1 className='text-6xl mb-4'>Howzat!</h1>

            <h2 className='text-6xl font-bold text-white mb-4'>
                {runs}/{wickets}
                <FontAwesomeIcon onClick={reset} className='ml-6' width={40} icon={faRefresh}/>
            </h2>

            <div className="runButtons">
                <button onClick={() => {setRuns(runs+1)}} className='btn btn-primary runButton'>1</button>
                <button onClick={() => {setRuns(runs+2)}} className='btn btn-primary runButton'>2</button>
                <button onClick={() => {setRuns(runs+3)}} className='btn btn-primary runButton'>3</button>
                <button onClick={() => {setRuns(runs+4)}} className='btn btn-primary runButton'>4</button>
                <button onClick={() => {setRuns(runs+6)}} className='btn btn-primary runButton'>6</button>
            </div>

            <div className="wicketButtons">
                <button onClick={wicket} className='btn btn-error wicketButton'>Bowled</button>
                <button onClick={wicket} className='btn btn-error wicketButton'>Caught</button>
                <button onClick={wicket} className='btn btn-error wicketButton'>LBW</button>
                <button onClick={wicket} className='btn btn-error wicketButton'>Run Out</button>
            </div>

            <ScoreCard/>
        </div>
    )
}

export default Game