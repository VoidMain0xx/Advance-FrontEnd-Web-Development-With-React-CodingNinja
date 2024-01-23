// // React Print
// // crating element

// const reactHeading = React.createElement("h1", {
//   className: "head",
//   id: "root",
//   children: "Hello React",
// });

// // appending

// ReactDOM.createRoot(document.getElementById("append")).render(reactHeading);

// // Jsx Prrint
// const jsxHeading = (
//   <>
//     <h1>Hello JSX</h1>
//     <p>This is made using Jsx</p>
//     <ul>
//       {"About React"}
//       <li>syntaxtical Sugar</li>
//       <li>Easy to use</li>
//     </ul>
//   </>
// );

// function App(){
//     return (<>
//     <h1>React Project</h1>

// <ul>
//       {"Skills used to make this project"}
//       <li>HTML</li>
//       <li>javascript</li>
//       <li>CSS</li>
//     </ul>

//     </>)
// }

// ReactDOM.createRoot(document.getElementById("append1")).render(< App />);
// ReactDOM.createRoot(document.getElementById("append1")).render(<h1>this is test</h1>);



const App = () => {

  const name = "Demo";
  const age = 18;
  const hobby = "JavaScript";
  const isMarried = false.toString();

  return (
    <>
    {/* render data here as per the expected output */}
    <h1>{name}'s basic Info: </h1>
    <p>My Age is {age}</p>
    <p>I Like {hobby} a lot!</p>
    <p>Am i married? {isMarried}</p>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("append"));
rootElement.render(<App />);