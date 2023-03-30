import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
//  import { useNavigate} from 'react-router-dom';
// import { useRouter } from 'next/router'

const Breadcrumb = (props) => {
  // const [click,setClick]=useState(false);
  const jsonPath = props.paths;
  const separator = props.separator;
  const callBackFunc = props.onElementClick;
  const onMenuClick = props.onMenuClick;
  console.log("jsonPath", jsonPath);
  const jsonlenght = jsonPath.length;
  const arrayLenght = jsonlenght - 1;
  const SingleArray = jsonlenght - jsonPath.length;

  console.log("SingleArray", SingleArray);

  console.log("arrayLenght", arrayLenght);

 

  // const gethtmlContent = () => {
  //   const listArray = jsonPath.filter((list, i, array) => {
  //     if (i !== 0 && i !== array.length - 1 && i !== array.length - 1) {
  //       return list;
  //     }
  //   });

  //   let menuBtn = document.getElementById("menu__icon");
  //   let dropdown = document.getElementsByClassName("dropdown__menu")[0];

  //   console.log("listArray", listArray);
  //   debugger;

  //   if (menuBtn) {
  //     menuBtn.addEventListener("click", function (event) {
  //       event.preventDefault();

  //       console.log("Menu Btn Class >>> ", menuBtn.classList);
  //       console.log("Menu Btn >>> ", menuBtn);
  //       if (isActive) {
  //         console.log("isActive>>", isActive);
  //         menuBtn.classList.add("active");
  //         console.log("menuBtn", menuBtn.classList.contains("active"));
  //         dropdown.classList.add("active");
  //         console.log("dropdown", dropdown.classList.contains("active"));
  //       } else {
  //         // if (menuBtn) {
  //         //   menuBtn.removeEventListener("click", function (event) {
  //         //     event.preventDefault();

  //         console.log("isActiveFlase>>", isActive);
  //         menuBtn.classList.remove("active");
  //         console.log("menuBtn", menuBtn.classList.contains("active"));
  //         dropdown.classList.remove("active");
  //         console.log("dropdown", dropdown.classList.contains("active"));
  //         //   });
  //         //}
  //       }
  //       isActive = !isActive;
  //     });
  //   }

  //   debugger;
  //   return (
  //     <>
  //       <button type="button" id="menu__icon" >
  //         <span >...
  //           {/* ...<span className="separator dots">{separator}</span> */}
  //         </span>
  //         <ul className="dropdown__menu">
  //           {listArray.map((item) => {
  //             return <li key={item.id}>{item.displaylabel}</li>;
  //           })}
  //         </ul>
  //       </button>
  //     </>
  //   );
  // };


  
  return jsonlenght > 5 ? (
    <div className="breadcumb">
      <div className="breadcum-wrapper" >
        <ul className="ulDiv">
          <li className="menuTitle"
            onClick={() => {
              callBackFunc(jsonPath[0].displaylabel);
            }}
          >
            {jsonPath[0].displaylabel}{" "}
            <span className="separator">{separator}</span>
          </li>
        
          <li className="menuTitle">{<Dropdown onElementClick={callBackFunc} paths={jsonPath} />}
            <span className="separator">{separator}</span>
          </li>
       <li className="menuTitle"
            onClick={() => {
              callBackFunc(jsonPath[jsonPath.length - 2].displaylabel);
            }}
          >
            {jsonPath[jsonPath.length - 2].displaylabel}{" "}
            <span className="separator">{separator}</span>
          </li>
          <li className="menuTitle"
            onClick={() => {
              callBackFunc(jsonPath[jsonPath.length - 1].displaylabel);
            }}
          >
            {jsonPath[jsonPath.length - 1].displaylabel}
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="breadcumb">
      <div className="breadcum-wrapper">
        <div className="uLDiv">
          <ul>
            {jsonPath.map((menu, index) => {
              return (
                <>
                  {index < arrayLenght ? (
                    <li
                      key={index}
                      onClick={() => {
                        callBackFunc(menu);
                      }}
                    >
                      {menu.displaylabel}
                      <span>{separator}</span>
                    </li>
                  ) : (
                    <li>{menu.displaylabel}</li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    
  );
  
};

export default Breadcrumb;
