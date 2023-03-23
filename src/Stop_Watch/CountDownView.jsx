import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Line, Circle } from "rc-progress";
import CircularProgressbar from "react-circular-progressbar";

const CountDownView = (props) => {
  const timevalues = props.timevalue;
  const timePercents = props.timePercent;
  const circleRadius=props.circleRadius || 120;
  const CounterTitle=props.CounterTitle;


  return (
    <div className="container-fluid">
      <Card className="md cardview">
      <div className="CounterTitle">{CounterTitle}</div>

        <div className="grid">  
          <div className="col">

            <div className="circle-wrapper">

              <div style={{ width: circleRadius, height: circleRadius }}>
                <Circle
                  percent={timePercents.weeksPer ? timePercents.weeksPer : 100}
                  strokeWidth={4}
                  strokeColor="#e6dcdc"
                  strokeLinecap="round"
                />
              </div>
              <span className="time">{timevalues.weeksValue}</span>
            </div>
            <span className="title">Weeks</span>

          </div>
          <div className="col ">

            <div className="circle-wrapper ">
              <div style={{ width: circleRadius, height: circleRadius }}>
                <Circle
                  percent={timePercents.daysPer ? timePercents.daysPer : 100}
                  strokeWidth={4}
                  strokeColor="#e6dcdc"
                  strokeLinecap="round"
                />
              </div>
              <div className="time">{timevalues.daysValue}</div>

            </div>
            <span className="title">Days</span>

          </div>

          <div className="col ">

            <div className="circle-wrapper ">
              <div style={{ width: circleRadius, height: circleRadius }}>
                <Circle
                  percent={timePercents.hoursPer? timePercents.daysPer : 100}
                  strokeWidth={4}
                  strokeColor="#e6dcdc"
                  strokeLinecap="round"
                />
              </div>

              <div className="time">
                <span>{timevalues.hoursValue}</span>
              </div>
            </div>
            <span className="title">Hours</span>

          </div>

          <div className="col ">

            <div className="circle-wrapper ">
              <div style={{ width: circleRadius, height: circleRadius }}>
                <Circle
                  percent={timePercents.minsPer > 0 ? timePercents.minsPer : 100}
                  strokeWidth={4}
                  strokeColor="#e6dcdc"
                  strokeLinecap="round"
                />
              </div>

              <div className="time">
                <span>{timevalues.minutesValue}</span>
              </div>
            </div>
            <span className="title">Minutes</span>

          </div>

          <div className="col ">

            <div className="circle-wrapper">
              <div style={{ width: circleRadius, height: circleRadius }}>
                <Circle
                  percent={timePercents.secondsPer ? timePercents.secondsPer: 100}
                  strokeWidth={4}
                  strokeColor="#e6dcdc"
                  strokeLinecap="round"
                />
              </div>

              <div className="time">
                <span>{timevalues.secondsValue}</span>
              </div>
            </div>
            <span className="title">Seconds</span>

          </div>
        </div>
      </Card>
    </div>
  );
};
export default CountDownView;
