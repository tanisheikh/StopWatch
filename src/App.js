import "./App.css";
//  import Stopwatch from '../src/Stop_Watch/Stopwatch';
//  import CountDown from './Stop_Watch/CountDown';
//  import TimerCss from './Stop_Watch/TimerCss' ;
import Breadcrumb from "./BreadCumb/Breadcrumb";
import Dropdown from './BreadCumb/Dropdown'
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
  return (
    <>
      {/* <Stopwatch/>  */}

      {/* <CountDown futureDate={'2023-03-22T19:42:00'} circleRadius={120} CounterTitle={"Count Down"}/>   */}
      <Breadcrumb onElementClick={(event)=>{console.log(event)}} paths={path} separator={"/"}  />
      {/* <Dropdown   onElementClick={(event)=>{console.log(event)}} paths={path} /> */}
      {/* <TimerCss/>  */}
    </>
  );
}

export default App;
