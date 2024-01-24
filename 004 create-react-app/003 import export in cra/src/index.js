import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage.js";
import Form from "./Form.js";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <HomePage />
    <Form />
  </StrictMode>
);
