import "./App.css";
import React, { lazy, Suspense } from "react";
//  import Stopwatch from '../src/Stop_Watch/Stopwatch';
//  import CountDown from './Stop_Watch/CountDown';
//  import TimerCss from './Stop_Watch/TimerCss' ;
// import Breadcrumb from "./BreadCumb/Breadcrumb";
//  import ReactCodeSplitting from "./ReactAdvance/ReactCodeSplitting";
// import MappingDropDown from "./MappingComponent/MappingDropDown";
// import DropDownM from './MappingComponent/DropDownM';
import Calculator from './calculator/Calculator'
function App() {
  const path = [
    {
      displaylabel: "Home",
      url: "some_url",
    },
    {
      displaylabel: "Dashboard",
      url: "some_url",
    },
    {
      displaylabel: "Account",
      url: "some_url",
    },
    {
      displaylabel: "SignIn",
      url: "some_url",
    },
    {
      displaylabel: "Signup",
      url: "some_url",
    },
    {
      displaylabel: "Login",
      url: "some_url",
    },
    {
      displaylabel: "Logout",
      url: "some_url",
    },
    {
      displaylabel: "Account",
      url: "some_url",
    },
    {
      displaylabel: "Logout",
      url: "some_url",
    },
    {
      displaylabel: "Login",
      url: "some_url",
    },
    {
      displaylabel: "Account",
      url: "some_url",
    },
  ];
  const title = [
    {
      id: 1,
      name: "john",
      
    },
    {
      id: 2,
      name: "James",
    },
    {
      id: 3,
      name: "William",
    },
    {
      id: 4,
      name: "Robert",
    },
    {
      id: 5,
      name: "David",
    },
    {
      id: 6,
      name: "Thomas",
    },
    {
      id: 7,
      name: "Alexander",
    },
    {
      id: 8,
      name: "George",
    },
    {
      id: 9,
      name: "Ian",
    },
    {
      id: 10,
      name: "Brian",
    },
    {
      id: 11,
      name: "Andrew",
    },
    {
      id: 12,
      name: "Michael",
    },
  ];
  const options = [
    {
      id: 1,
      optionname: "Alan",
    },
    {
      id: 2,
      optionname: "Peter",
    },
    {
      id: 3,
      optionname: "Charles",
    },
    {
      id: 4,
      optionname: "Ronald",
    },
    {
      id: 5,
      optionname: "Gordon",
    },
    {
      id: 6,
      optionname: "Kenneth",
    },
    {
      id: 7,
      optionname: "Douglas",
    },
    {
      id: 8,
      optionname: "Joseph",
    },
    {
      id: 9,
      name: "Donald",
    },
    {
      id: 10,
      optionname: "Edward",
    },
    {
      id: 11,
      optionname: "Colin",
    },
    {
      id: 12,
      optionname: "Hugh",
    },
  ];
  // const ReactCodeSplitting = React.lazy(() =>
  //   import("./ReactAdvance/ReactCodeSplitting")
  // );
  return (
    <>
      {/* <Stopwatch/>  */}
      {/* <CountDown futureDate={'2023-03-22T19:42:00'} circleRadius={120} CounterTitle={"Count Down"}/>   */}
      {/* <Breadcrumb
        onElementClick={(event) => {
          console.log(event);
        }}
        paths={path}
        separator={"/"}
      /> */}
      {/* <Suspense fallback={<div>Loading......</div>}>
        {/* if not show an any message you can rendrer any component insted of
        message 
        <ReactCodeSplitting />
      </Suspense> */}

      {/* <Dropdown   onElementClick={(event)=>{console.log(event)}} paths={path} /> */}
      {/* <TimerCss/>  */}
       {/* <MappingDropDown titleName={title} optionsName={options} />  */}
       {/* <DropDownM titleName={title} optionsName={options}/> */}
       <Calculator/>
    </>
  );
}

export default App;
