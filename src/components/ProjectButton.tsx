import { ReactNode, useReducer, useState } from "react";
import Card from "./card";
import React from "react";

interface Props {
  children: ReactNode;
  isActive: boolean;
  onClickFunction: () => void;
}

function ProjectButton({ children, onClickFunction, isActive }: Props) {
  return (
    <div
      onClick={() => {
        onClickFunction();
      }}
      className={isActive === true ? "button-active button" : "button"}
    >
      {children}
    </div>
  );
}
export default ProjectButton;
