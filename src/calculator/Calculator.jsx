import { useContext, useEffect, useState } from "react";
import styles from "./Calculator.css";
const Calculator = () => {
  const [inputNum, setInputNum] = useState(0);
  const [monitor, setMonitor] = useState(0);
  const [decimal, setDecimal] = useState(false);
  const [decimalCount, setDecimalCount] = useState(1);
  const [oprator, setOprator] = useState("");
  const [calculatedNum, setCalculatedNum] = useState(0);

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);

  useEffect(() => {
    setMonitor(calculatedNum);
  }, [calculatedNum]);

  const inputNumTotal = (num) => {
    if (decimal) {
      num = num / Math.pow(10, decimalCount);
      setDecimalCount(decimalCount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalCount)));
    } else {
      setInputNum(inputNum * 10 + num);
    }
  };
  console.log("oprator>>", oprator);

  const setInputOprator = (oprator) => {
    setOprator(oprator);
    calculate();
    setInputNum(0);
  };
  console.log("inputNum>>", inputNum);

  const calculate = () => {
    setDecimal(false);
    setDecimalCount(1);
    if (oprator === "/" && inputNum === 0) {
      setInputNum(0);
      setCalculatedNum(NaN);
      return;
    }
    if (calculatedNum === 0 && inputNum === 0) {
      return;
    }
    switch (oprator) {
      case "+":
        setCalculatedNum(calculatedNum + inputNum);
        break;
      case "-":
        setCalculatedNum(calculatedNum - inputNum);
        break;
      case "/":
        setCalculatedNum(calculatedNum / inputNum);
        break;
      case "*":
        setCalculatedNum(calculatedNum * inputNum);
        break;
    }

    if (oprator === "") {
      setCalculatedNum(inputNum);
    } else {
      setInputNum(0);
    }
  };
  const equal = () => {
    calculate();
    setOprator("");
  };
  const clearAll = () => {
    setInputNum(0);
    setCalculatedNum(0);
    setOprator("");
    setMonitor(0);
  };

  return (
    <div className="container">
      <div className={styles.monitor}>
        <p>{monitor}</p>
      </div>
      <div className={styles.calcbtnContainer}>
        <div className="row">
          <button onClick={clearAll} className="col">
            AC
          </button>
          <button className="col">-/+</button>
          <button className="col">%</button>
          <button className="col">/</button>
        </div>
        <div className="row">
          <button onClick={() => inputNumTotal(7)} className="col">
            7
          </button>
          <button onClick={() => inputNumTotal(8)} className="col">
            8
          </button>
          <button onClick={() => inputNumTotal(9)} className="col">
            9
          </button>
          <button onClick={() => setInputOprator("*")} className="col">
            *
          </button>
        </div>

        <div className="row">
          <button onClick={() => inputNumTotal(4)} className="col">
            4
          </button>
          <button onClick={() => inputNumTotal(5)} className="col">
            5
          </button>
          <button onClick={() => inputNumTotal(6)} className="col">
            6
          </button>
          <button onClick={() => setInputOprator("-")} className="col">
            -
          </button>
        </div>

        <div className="row">
          <button onClick={() => inputNumTotal(1)} className="col">
            1
          </button>
          <button onClick={() => inputNumTotal(2)} className="col">
            2
          </button>
          <button onClick={() => inputNumTotal(3)} className="col">
            3
          </button>
          <button onClick={() => setInputOprator("+")} className="col">
            +
          </button>
        </div>

        <div className="row">
          <button onClick={() => inputNumTotal(0)} className="col">
            0
          </button>
          <button onClick={() => setDecimal(true)} className="col">
            .
          </button>
          <button onClick={equal} className="col">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
