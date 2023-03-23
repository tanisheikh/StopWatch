import React from "react";
import moment from "moment";

const Timer = (props) => {
  return (
    <>
      <div className="timer">
        <span className="digits">{moment.utc(props.time).format("mm:ss")}</span>
        <span className="digits mili-sec">
          {moment.utc(props.time).format(":SS")}
        </span>
        {props.time > 0 ? (
          <button onClick={props.addButton}>
            <i className="pi pi-plus "></i>
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Timer;
