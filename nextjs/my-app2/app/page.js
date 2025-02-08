"use client"
import { submitAction } from "./action/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
      <div>
        <label htmlFor="name"></label>
        name
        <input className="bg-orange-600" type="text" name="name" id="name" />
      </div>
      <div>
        <label className="bg-orange-600" htmlFor="add"></label>
        add
        <input type="text" name="add" id="add" />
      </div>
      <button>Submit</button>
    </form>
  );
}

