import React from "react";

export  const getNumbersFormatted = (value, numberOfDigits,locale) => {
    debugger;
    return (value).toLocaleString(locale, {minimumIntegerDigits: numberOfDigits, useGrouping: false})
  
};

