import React from 'react'

function Wicket({runs, wickets, method}) {
  return (
    <div>
      <div className="card w-96 bg-base-400 shadow-xl">
        <div className="card-body">
          <div className="wicketDetails">
            <p>
                {method}
            </p>
            <p>
                {runs}/{wickets}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wicket