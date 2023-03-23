import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Controller from "./Controller";
import ListTimeView from "./ListTimeView";
// import CountDown from "./CountDown";
import moment from "moment";

const Stopwatch = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeList, setTimeList] = useState([]);
  let milliseconds = time;
  const timeFormat = moment.utc(milliseconds).format("MM:ddd:HH:mm:ss:SS");
  // console.log("timeListArray>>",timeListArray);
  //  console.log("timeConvertArray>>",timeConvertArray);

  const setTimeValue = () => {
    let interval = null;

    if (isActive && isPaused === false) {
      // console.log("isActive ", isActive, "isPaused", isPaused);
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  };
  useEffect(setTimeValue, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  debugger;
  const handleReset = () => {
    setIsActive(false);
    setTimeList([]);
    setTime(0);
  };
  debugger;
  const handlePauseResumeEvent = () => {
    setIsPaused(!isPaused);
  };
  debugger;

  const addButton = () => {
    const timeArray = timeList;
    console.log("timeList>>>", timeList);
    timeArray.push(time);
    setTimeList([...timeArray]);

    debugger;
    console.log("timeArray>>>", timeArray);
    console.log("timeList>>>", timeList);
  };
  const deleteItem = (index) => {
    console.log("index-timeList", index, timeList);
    const addArray = timeList;
    addArray.splice(index, 1);
    console.log("addArray", addArray);
    setTimeList([...addArray]);
  };
  return (
    <div className="stop-watch">
      <Timer time={time} addButton={addButton} />
      {timeList.length === 0 ? (
        ""
      ) : (
        <ListTimeView timeList={[...timeList]} deleteItem={deleteItem} />
      )}
      <Controller
        Active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handleReset={handleReset}
        handlePauseResume={handlePauseResumeEvent}
      />
      {/* <CountDown timeDiffList={timeDiffList} days={days} week={weeks} /> */}
    </div>
  );
};

export default Stopwatch;
