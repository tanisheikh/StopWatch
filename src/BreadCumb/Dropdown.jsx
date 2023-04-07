import React, { useState } from "react";

const Dropdown = (props) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const callBackFunc = props.onElementClick;
  const jsonPath = props.paths;

  const listArray = jsonPath.filter((list, i, array) => {
    if (i !== 0 && i !== array.length - 1 && i !== array.length - 1) {
      return list;
    }
  });
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

//   console.log("listArray", listArray);
  debugger;

  debugger;

  return (
    <>
      <div className="dropDiv">
        <button
          type="button"
          aria-aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={"btnToggle" + " " +isOptionsOpen ? "expanded" : "" }
          onClick={toggleOptions}
        >
          ...{" "}
        </button>
        <ul
          role="listbox"
          aria-activedescendant={listArray[0]}
          className={`options ${isOptionsOpen ? "show" : ""}`}
        >
          {listArray.map((item) => {
            return (
              <li
                id={item}
                role="option"
                onClick={() => {
                  callBackFunc(item.displaylabel);
                }}
              >
                {item.displaylabel}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
