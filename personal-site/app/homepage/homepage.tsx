import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useState } from "react";

interface MyButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function Homepage() {

  return (
    <div>
      <h1 className="text-3xl">Hello world!</h1>
      <MyButton />
      <MyButton/>
    </div>
  );
}

function MyButton() {
  return (
    <button className="p-4 m-4 bg-violet-200 hover:bg-violet-300">
      I am a purple button clicked times
    </button>
  );
}
