import './App.css';
 import Stopwatch from '../src/Stop_Watch/Stopwatch';
 import CountDown from './Stop_Watch/CountDown';
//  import TimerCss from './Stop_Watch/TimerCss' ;
 
function App() {
  return (
<>
  {/* <Stopwatch/>  */}
  
  <CountDown futureDate={'2023-03-22T19:42:00'} circleRadius={120} CounterTitle={"Count Down"}/>    
   {/* <TimerCss/>  */}
  </>
  );
}

export default App;
