// React Print
// crating element

const reactHeading = React.createElement("h1", {
  className: "head",
  id: "root",
  children: "Hello React",
});

// appending

ReactDOM.createRoot(document.getElementById("append")).render(reactHeading);

// Jsx Prrint
const jsxHeading = (
  <>
    <h1>Hello JSX</h1>
    <p>This is made using Jsx</p>
    <ul>
      {"About React"}
      <li>syntaxtical Sugar</li>
      <li>Easy to use</li>
    </ul>
  </>
);

function App(){
    return (<>
    <h1>React Project</h1>

<ul>
      {"Skills used to make this project"}
      <li>HTML</li>
      <li>javascript</li>
      <li>CSS</li>
    </ul>

    </>)
}

ReactDOM.createRoot(document.getElementById("append1")).render(< App />);
ReactDOM.createRoot(document.getElementById("append1")).render(<h1>this is test</h1>);
