import React, { useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { WRONG_EMAIL, WRONG_PASSWORD } from "./constants";
import moment from "moment";
import { history } from "../service/helpers";
export const Validator = () => {
  return useRef(
    new SimpleReactValidator({
      validators: {
        email: {
          message: WRONG_EMAIL,
          rule: (val, params, validator) => {
            return validator.helpers.testRegex(val, /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/);
          },
          messageReplace: (message, params) => message.replace("", this.helpers.toSentence(params)),
          required: true,
        },
        password: {
          message: WRONG_PASSWORD,
          rule: (val, params, validator) => {
            return validator.helpers.testRegex(val, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/);
          },
          messageReplace: (message, params) => message.replace("", this.helpers.toSentence(params)),
          required: true,
        },
        element: (message) => <span className="error-message">{message}</span>,
      },
    }),
  );
};
const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
   const AuthToken = localStorage.getItem("token") != null ? localStorage.getItem("token") : null;
   const AuthEmail = localStorage.getItem("email") != null ? localStorage.getItem("email") : null;

}

export const getBuildDate = (epoch) => {
  const buildDate = moment(epoch).format("DD-MM-YYYY");
  return buildDate;
};

export const removeDuplicates = (arr, field) => {
  return arr.filter((v, i, a) => a.findLastIndex(t => (t[field] === v[field])) === i)
}

export const bytesToSize = (bytes) => {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const handleLink = (link, title) => {
  localStorage.setItem("selectedTab", JSON.stringify({ tab: title }));
  history.push(link);
}