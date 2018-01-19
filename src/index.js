import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import rootReducer from "./rootReducer";
import registerServiceWorker from "./registerServiceWorker";

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
registerServiceWorker();

if (module.hot) {
  module.hot.accept("./App", render);
  module.hot.accept("./rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}
