import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "./ui-components";
import "@aws-amplify/ui/dist/styles.css";
Amplify.configure(config);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const signOut = () => {
  Amplify.Auth.signOut();
};
root.render(
  <ThemeProvider theme={studioTheme}>
    <React.StrictMode>
      <App signOut={signOut} />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
