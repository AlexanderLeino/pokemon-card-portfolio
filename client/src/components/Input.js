import React, { useState } from "react";
import { Flex, FlexColumn } from "./Flex/flex-column";
export const Input = () => {

  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)


  return (
    <>
      <input className=" max-w-fit focus-visible: border-solid border-2 border-slate-500 hover:border-orange-500 p-1 mt-4 outline-none focus-visible:outline-none focus-visible:border-orange-500 " />
    </>
  );
};
