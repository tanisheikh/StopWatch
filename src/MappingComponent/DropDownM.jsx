import React, { useState } from "react";
import "./mapping.css";

const DropDownM = (props) => {
  const titleNames = props.titleName;
  const optionsName = props.optionsName;
  const index = props.index;
  const mappedName = props.mappedName;
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const isOptionOpenvalue = isOptionsOpen;
  const toggleOptions = () => {
    const tempIsOpen = isOptionOpenvalue;
    setIsOptionsOpen(!tempIsOpen);
  };

  debugger;
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <button
            type="button"
            aria-aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={isOptionsOpen ? "expanded" : ""}
            onClick={toggleOptions}
          >
            <div className="dropDownMenu">
              <span style={{ paddingRight: "80px" }}>
                {titleNames?.mappedItem?.optionname || ""}
              </span>
              <i className="fa fa-thin fa-angle-down"></i>
            </div>
          </button>

          <ul
            role="listbox"
            aria-activedescendant={titleNames.name}
            className={`options ${isOptionsOpen ? "show" : ""}`}
          >
            {(optionsName || []).map((optionItem, indexOp) => {
              return (
                <>
                  <li
                    id={optionItem}
                    role="option"
                    //  aria-selected={0000==indexOp}
                    onClick={() => {
                      console.info("Clicked");
                      // titleNames.mappedItem
                      //   ? alert("already added")
                      //   : (titleNames["mappedItem"] = optionItem);
                      // titleNames["mappedItem"] = optionItem
                      console.log("optionItem>>2", indexOp);
                      setIsOptionsOpen(false);
                      mappedName(titleNames, optionItem, index,indexOp);
                      console.info("titlename>>>>4", titleNames);
                    }}

                  >
                    {optionItem.optionname}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownM;
