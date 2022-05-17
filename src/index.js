//let React = require("react");
//let ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import contacts from "./contacs";

//Con referencia a root
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX Permite utilizar expresiones de Javascript dentro del código HTML

const customStyle = {
  height: "100px",
  width: "100px",
  border: "1px solid black"
};

/*const fName = "Carlos";
const lName = "Rubio";
const header1 = (
  <div>
    <Heading />
    <p style={customStyle}>Copyright {new Date().getFullYear()}</p>
    <List />
  </div>
);*/

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.namecontact}</h2>
        <img className="circle-img" src={props.image} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
root.render(
  <div>
    <h1 className="heading"> Mis contactos</h1>
    <Card
      namecontact={contacts[0].name}
      image={contacts[0].image}
      tel={contacts[0].tel}
      email={contacts[0].email}
    />
    <Card
      namecontact={contacts[1].name}
      image={contacts[1].image}
      tel={contacts[1].tel}
      email={contacts[1].email}
    />
    <Card
      namecontact={contacts[2].name}
      image={contacts[2].image}
      tel={contacts[2].tel}
      email={contacts[2].email}
    />
  </div>
);

let list_numbers = [50,1,9,100,85];

//Método normal y basico
/*let new_list_numbers = [];
list_numbers.forEach(function(x){
  new_list_numbers.push(x*2);
});
console.log(new_list_numbers);*/

//Nuevo método con map
//Map crea un nuevo arreglo aplicando una funcion
//a cada elemento de un arreglo
/*let new_list_numbers = list_numbers.map(function(x){
  return x*2;
});*/


/*
let new_list_numbers = list_numbers.map((x) => x*2);
console.log(new_list_numbers);
*/


/*
let filtered_numbers = [];
list_numbers.forEach(function (x){
  if (x > 50) {
    filtered_numbers.push(x);
  }
});
console.log(filtered_numbers);
*/


let filtered_numbers = list_numbers.filter((x) => x > 50);
console.log("Filtrados", filtered_numbers);
//Con método estático
//ReactDOM.render(<h1>Otra cosa</h1>, document.getElementById('root'));
//Con javascript vanilla
/*let root = document.getElementById('root');
root.innerHTML = "<h1>asiokdnjsafoi</h1>";*/
