import React from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Password } from 'primereact/password';


export const InputText = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <InputText
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.change}
      />
    </>
  );
};

export const InputNumber = () => {
  return (
    <>
      <label>{props.label}</label>
      <InputMask
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        mask={props.mask}
      />
    </>
  );
};

export const passWord = () => {
  return (
    <>
      <span className="p-float-label">
        <Password 
        // placeholder={props.passWord}
        value={props.value}
        onChange={props.onChange}
        feedback={props.feedback}
        toggleMask
        />
        <label htmlFor="password">{props.label}</label>

      </span>
    </>
  );
};
