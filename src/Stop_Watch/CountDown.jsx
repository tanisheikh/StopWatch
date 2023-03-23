import React, { useState, useEffect } from "react";
import moment from "moment";
import CountDownView from "./CountDownView";
import { getNumbersFormatted } from "../utils/AppUtils";

const CountDown = (props) => {

  let CurrentDate = moment().local(true);

  let futureDate = moment(props.futureDate).local(true);

  let diffrantDate =
    futureDate.diff(CurrentDate) <= 0 ? 0 : futureDate.diff(CurrentDate);

  const [timeDiffList, setTimeDiffList] = useState(diffrantDate);

  let intervalRef = diffrantDate;

  const intervalTime = () => {
    if (intervalRef) {
      intervalRef = setInterval(() => {
        console.info("values >>>> ", diffrantDate, intervalRef);
        diffrantDate = diffrantDate - 1000;
        setTimeDiffList(diffrantDate);
        if (diffrantDate <= 1000 && intervalRef) {
          console.info("Clearing interval");
          clearInterval(intervalRef);
        }
      }, 1000);
      console.info("Interval >>>> ", intervalRef);
    }
  };

  useEffect(() => {
    intervalTime();
  }, [props.futureDate]);

  let totalDays = moment.duration(timeDiffList, "milliseconds").asDays();
  let weeksCal = totalDays / 7;

  let weekFloor = Math.floor(weeksCal);
  let daysCal = totalDays - weekFloor * 7;
  let totalWeeks = Math.trunc(weeksCal);
  let daysValueAbs = Math.round(daysCal);
  let weeksValue = getNumbersFormatted(totalWeeks, 2);

  let daysValue = getNumbersFormatted(daysValueAbs, 2);

  let totalHours = moment.duration(timeDiffList).hours();
  let hoursValue = getNumbersFormatted(totalHours, 2);

  let totalMinutes = Math.floor(moment.duration(timeDiffList).minutes());

  let minutesValue = getNumbersFormatted(totalMinutes, 2);

  let totalSeconds = moment.duration(timeDiffList).seconds();
  let secondsValue = getNumbersFormatted(totalSeconds, 2);

  const weeksPer = (weeksValue * 100) / 52;
  const daysPer = (daysValue * 100) / 7;
  const hoursPer = (hoursValue * 100) / 24;
  const minsPer = (minutesValue * 100) / 60;
  const secondsPer = (secondsValue * 100) / 60;

  const timevalue = {
    weeksValue,
    daysValue,
    hoursValue,
    minutesValue,
    secondsValue,
  };
  const timePercent = { weeksPer, daysPer, hoursPer, minsPer, secondsPer };
  return (
    <>
      <CountDownView
        timevalue={timevalue}
        timePercent={timePercent}
        circleRadius={props.circleRadius}
        CounterTitle={props.CounterTitle}
      />
    </>
  );
};

export default CountDown;
