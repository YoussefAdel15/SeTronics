import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
