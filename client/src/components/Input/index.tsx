import React, { useState, FC } from "react";
import Flex from "../Flex";

interface props {
    onChange: any,
    name: string
}


const Input = ({onChange, name} : props) => {

  return (
    <>
      <input name={name} className="max-w-fit focus-visible: border-solid border-2 border-slate-500 hover:border-orange-500 p-1 mt-4 outline-none focus-visible:outline-none focus-visible:border-orange-500 " onChange={onChange}  />
    </>
  );
};

export default Input