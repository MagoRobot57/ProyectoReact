import React from "react";
import PI, { doublePi, triplePi } from "./algo";
//import * as pi from "./algo";

function Heading() {
  const fName = "Fulanito";
  const lName = "algo";
  return (
    <h1 className="firsth1" contentEditable="true" spellCheck="false">
      Hola, soy {fName} {lName} y mi número de la suerte es {doublePi()}
      {Math.floor(Math.random() * 20 + 10)}
    </h1>
  );
}

export default Heading;
