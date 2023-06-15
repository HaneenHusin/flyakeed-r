import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import MyAppBar from './components/MyAppBar';
import MyBottomNavigationBar from "./components/MyBottomNavigationBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyAppBar />
    <App />
    <div className="bottom_toolbar">
      <MyBottomNavigationBar />
    </div>
  </React.StrictMode>
);

reportWebVitals();
