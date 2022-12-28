import React from 'react'
import Wicket from './Wicket'

function Innings() {
  return (
    <div className="mt-4">
      <ul>
        <li>
          <Wicket runs={23} wickets={4} method={"LBW"} />
        </li>
        <li>
          <Wicket runs={23} wickets={5} method={"LBW"} />
        </li>
        <li>
          <Wicket runs={23} wickets={6} method={"LBW"} />
        </li>
      </ul>
    </div>
  );
}

export default Innings