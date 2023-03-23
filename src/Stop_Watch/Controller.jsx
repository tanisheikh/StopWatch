import React from "react";

const Controller = (props) => {
  const startButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const activeButton = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div className="Control-Buttons">
      <div>{(props.Active ? activeButton : startButton)}</div>
    </div>
  );
 
  
};

export default Controller;
