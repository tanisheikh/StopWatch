import React from "react";
import * as Yup from "yup";

export default class User {
  name;
  email;
  mobile;
  passWord;

  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.mobile = user.mobile;
    this.passWord = user.passWord;
  }

  static getInitialvalue() {
    return {
      firstName: undefined,
      emailId: undefined,
      mobile: undefined,
      passWord: undefined,
    };
  }

  static getValidationSchema() {
    return Yup.object({
      firstName: Yup.String(),
      emailId: Yup.String(),
      mobile: Yup.Number(),
      passWord: Yup.String(),
    });
  }
}
