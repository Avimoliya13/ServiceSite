import React from 'react';
import ReactDOM from 'react-dom';
// import UseEffect from './UseEffect';


// ReactDOM.render(
//   <h1> Heyyyy!!! </h1>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <div>
//     <h1> Heyyyy!!! </h1>
//     <p>What's up?</p>
//   </div>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   [
//     <h1> Heyyyy!!! </h1>,
//     <p>What's up?</p>
//   ],
//   document.getElementById('root')
// );


// ReactDOM.render( 
//   //<React.Fragment>
//   <>
//     <h1> Heyyyy!!! </h1>
//     <p>What's up?</p>
//     <p>My favourite series.</p>
//   </>,
//   //</React.Fragment>,
//   document.getElementById('root')
// );


// Challenge 1 
// ReactDOM.render( 
//   //<React.Fragment>
//   <>
//     <h1> Heyyyy!!! </h1>
//     <p>What's up?</p>
//     <p>My favourite series.</p>
//     <ol>
//     <li>Friends</li>
//     <li>Mirzapur</li>
//     <li>Scared Games</li>
//     <li>Narcotics</li>
//     <li>13 Reasons Why?</li>
//     </ol>
//   </>,
//   //</React.Fragment>,
//   document.getElementById('root')
// );


// const fname = "Avi";
// ReactDOM.render(
//   <>
//   <h1>My name is {fname}</h1>
//   <p>My age is {15+3}</p>
//   </>,
//   document.getElementById("root")
// );


// const fname = "Avi";
// const lname = "Moliya";
// ReactDOM.render(
//   <>
//   <h1>My name is {`${fname} ${lname}`}</h1>     
//   <p>My age is {15+3}</p>
//   </>,
//   document.getElementById("root")
// );

//  OR

// const fname = "Avi";
// const lname = "Moliya";
// ReactDOM.render(
// <h1>{`My name is ${fname} ${lname}.
// My age is ${15+3}.`}</h1>,
// document.getElementById("root")
// );


// Challenge 2
// const fname = "Avi";
// const lname = "Moliya";
// const curDate = new Date().toLocaleDateString();
// const curTime = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1>{`My name is ${fname} ${lname}`}</h1>
// <p>Date : {curDate}</p>
// <p>Time : {curTime}</p>
// </>,
// document.getElementById("root")
// );


// const name = "Avi";
// const img1 = "https://picsum.photos/200/300";
// const link = "https://www.gettyimages.in/collections/500px"
// ReactDOM.render(
//     <>
//     <h1 contentEditable="true">My name is {name}.</h1>
//     <a href={link} target="_blank">
//     <img src={img1} alt="randomImage"/>
//     </a>
//     </>,
//     document.getElementById("root")
// );


//External CSS 
// const name = "Avi";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.gettyimages.in/collections/500px"
// ReactDOM.render(
//     <>
//     <h1 className="heading">My name is {name}.</h1>
//     <div class="img_div">
//         <img src={img1} alt="randomImage"/>
//         <img src={img2} alt="randomImage"/>
//         <a href={link} target="_blank">
//             <img src={img3} alt="randomImage"/>
//         </a>
//     </div>
//     </>,
//     document.getElementById("root")
// );


//Internal CSS 
// const name = "Avi";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.gettyimages.in/collections/500px"
// const heading = {
//     color: "red",
//     textAlign:" center",
//     textTransform:" capitalize",
//     fontWeight: "bold",
//     textShadow:" 0px 2px 4px #ffe9c5",
//     margin:' 50px 0',
//     fontFamily:" 'Oswald', sans-serif"
//   };
// ReactDOM.render(
//     <>
//     <h1 style={heading}>My name is {name}.</h1>
//     <div class="img_div">
//         <img src={img1} alt="randomImage"/>
//         <img src={img2} alt="randomImage"/>
//         <a href={link} target="_blank">
//             <img src={img3} alt="randomImage"/>
//         </a>
//     </div>
//     </>,
//     document.getElementById("root")
// );


// Challenge 3
// let curDate = new Date(2020,5,5,9);
// curDate = curDate.getHours();
// let greeting = "";
// const cssStyle = {};
// if (curDate >= 1 && curDate < 12)
// {
//     greeting = "Good Morning";
//     cssStyle.color = 'green';
// }
// else if (curDate >= 12 && curDate < 19)
// {
//     greeting = "Good Afternoon";
//     cssStyle.color = 'orange';
// }
// else 
// {
//     greeting = "Good Night";
//     cssStyle.color = 'black';
// }
// ReactDOM.render(
//     <>
//         <div>
//             <h1>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
//         </div>
//     </>,
//     document.getElementById("root")
// );


//Use of Components
// import All from "./All";

// ReactDOM.render(
//     <All />,document.getElementById("root")
// ); 


//Es-6 Import, Export and wild card(*) module
// import avi, {surname, hobbies} from "./Importexport";

// ReactDOM.render(
//     <>
//     <ol>
//     <li>Hey!!</li>
//     <li>{avi}</li>
//     <li>{surname}</li>
//     <li>{hobbies()}</li>
//     </ol>
//     </>,
//     document.getElementById("root")
// );

// import *as gamete from "./Importexport";
// ReactDOM.render(
//     <>
//     <ol>
//     <li>Hey!!</li>
//     <li>{gamete.default}</li>
//     <li>{gamete.surname}</li>
//     <li>{gamete.hobbies()}</li>
//     </ol>
//     </>,
//     document.getElementById("root")
// );


//Challenge 5
// import App from "./All";

// ReactDOM.render( <App/>, document.getElementById("root") );


//Props
// import Card from "./Card";
// ReactDOM.render(
//     <>
//     <Card 
//     imgsrc=""
//     title=" A Netflix Original Series"-
//     sname="Dark"
//     link="https://www.avi.com"
//     />
//     <Card 
//     imgsrc=""
//     title=" A Amazon Original Series"
//     sname="Falcon and Winter Soilder"
//     link="https://www.avi1.com"
//     />
//     <Card 
//     imgsrc=""
//     title=" A Netflix Original Series"
//     sname="Money Heist"
//     link="https://www.avi2.com"
//     />
//     </>,
//     document.getElementById("root")
// )


//Using Array map() Important to know fat arrow and map in ECMA-script
// import All1 from "./All1";
// ReactDOM.render( <All1 />, document.getElementById("root") )


//Slot Machine
// import Slotapp1 from "./Slotapp";
// ReactDOM.render( <Slotapp1 />, document.getElementById("root") )


// import Hooks from "./Hooks";
// ReactDOM.render( <Hooks />, document.getElementById("root") )


//Challenge 6 and Mini project Digital clock
// import App from "./Hooks1";
// ReactDOM.render( <App />, document.getElementById("root") )


//Events
// import Event from "./Event";
// ReactDOM.render( <Event />, document.getElementById("root") )  


//Forms and ControlledComponents
// import ControlledComponents from "./Controlled";
// ReactDOM.render( <ControlledComponents />, document.getElementById("root") )  


//Handelling Multiple Input
// import HandellingInput from "./HandellingInput";
// ReactDOM.render( <HandellingInput />, document.getElementById("root") )  


//Challenge 7
// import Challenge from "./Challenge";
// ReactDOM.render( <Challenge />, document.getElementById("root") )  


//Project 1
// import Project1 from "./Project1";
// ReactDOM.render( <Project1 />, document.getElementById("root") )  


//Challenge 8
// import Challenge8 from "./Challenge8";
// ReactDOM.render( <Challenge8 />, document.getElementById("root") ) 


//Bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.render( 
// <>
//     <h1 className=" text-center text-danger m-auto p-5 ">Hey!!!!!!</h1>
//     <button className="btn-success m-5 text-danger">Click Me!!</button>
//     <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="basic-addon1">@</span>
//   </div>
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
// </div>

// <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//   <div class="input-group-append">
//     <span class="input-group-text" id="basic-addon2">@example.com</span>
//   </div>
// </div>

// <label for="basic-url">Your vanity URL</label>
// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
//   </div>
//   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
// </div>

// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text">$</span>
//   </div>
//   <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
//   <div class="input-group-append">
//     <span class="input-group-text">.00</span>
//   </div>
// </div>

// <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text">With textarea</span>
//   </div>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
// </div>
// </>,
//  document.getElementById("root") ) 


//Context 
// import App from "./AppComponent";
// ReactDOM.render( <App/>, document.getElementById("root"));


//UseEffect Hooks
// import App from "./UseEffect";
// ReactDOM.render( <App/>, document.getElementById("root"));


//Api, Async wait
// import ApiComp from "./ApiComp";
// ReactDOM.render( <ApiComp/>, document.getElementById("root"));


//React Router
// import Router from "./Router";
// import { BrowserRouter } from "react-router-dom";
// ReactDOM.render( 
//     <BrowserRouter>
//         <Router/>
//     </BrowserRouter>, 
// document.getElementById("root"));


//React Website
import App1 from "./App1"
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
        <BrowserRouter>
            <App1 />
        </BrowserRouter>
    </>, 
document.getElementById("root")
);