import React, { useState, useEffect } from "react";
import "./mapping.css";
import DropDownM from "./DropDownM";

const MappingDropDown = (props) => {
  const [titleName, setTitleName] = useState(props.titleName);
  const optionsName = props.optionsName;
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log("titleNameMaopping>>>", titleName);

  const isOptionOpenvalue = isOptionsOpen;
  const toggleOptions = () => {
    const tempIsOpen = isOptionOpenvalue;
    setIsOptionsOpen(!tempIsOpen);
  };

 
  const mappedName = (titleNames, optionItem, index,indexOp) => {
    debugger;
    const tempNames = [...titleName];
    setTitleName(tempNames);
    console.log("optionItem>>>fuctionCall", titleNames);
  
    const currentOptions = titleName.filter(
      (title) =>  title.mappedItem && title.mappedItem.id === optionItem.id
    );
    console.log("currentOptions>>",currentOptions)
    if(currentOptions.length  >  0 ){
      currentOptions.map((name)=>titleNames.mappedItem.optionname  === name.mappedItem.optionname? "" :alert(`${name.mappedItem.optionname} is connected with ${name.name}`))
    }else{
      tempNames[index]["mappedItem"] = optionItem
    }

  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>NameList</th>
            <th>MappedName</th>
          </tr>
        </thead>
        <tbody>
          {console.log("titleNameMap>>>", titleName)}
          {(titleName || []).map((titleItem, index) => {
            return (
              <>
                <tr key={index}>
                  <td>Name:{titleItem.name}</td>
                  <td style={{ width: "300px" }}>
                    {
                      <DropDownM
                        titleName={titleItem}
                        optionsName={optionsName}
                        index={index}
                        mappedName={mappedName}
                      />
                    }
                  </td>
                  <td>
                    
                    {titleItem?.mappedItem?.optionname ? (
                      <ul>
                        <li>{`${titleItem?.mappedItem?.optionname} is connected with ${titleItem.name}`}</li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {/* <div className="wrapper">
      <div className="container">
        <button
          type="button"
          aria-aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={isOptionsOpen ? "expanded" : ""}
          onClick={toggleOptions}
        >
          <div className="dropDownMenu">
            <span style={{ paddingRight: "80px" }}>{selectedOption.name} </span>
            <i class="fa fa-thin fa-angle-down"></i>{" "}
          </div>
        </button>

        <ul
          role="listbox"
          aria-activedescendant={titleName[0].name}
          className={`options ${isOptionsOpen ? "show" : ""}`}
        >
          {(optionsName || []).map((nameListD, index) => {
            return (
              <li
                id={nameListD.id}
                role="option"
                aria-selected={selectedOption == index}
                onClick={() => {
                  setSelectedOptionAndClosed(nameListD);
                }}
              >
                {nameListD.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div> */}
    </div>
  );
};

export default MappingDropDown;
