import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { CssVarsProvider as JoyProvider } from "@mui/joy";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "./config/authConfig";
import { MsalProvider } from "@azure/msal-react";
import App from "./App";
const msalInstance = new PublicClientApplication(msalConfig);

//get initialize msalInstance
msalInstance.initialize();

const activeAccount = msalInstance.getActiveAccount();

if (!activeAccount) {
  // Account selection
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }
}

//set the account
msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const authenticationResult = event.payload as AuthenticationResult;
    const account = authenticationResult.account;
    msalInstance.setActiveAccount(account);
  }
});

//enable account storage event
msalInstance.enableAccountStorageEvents();

const materialTheme = materialExtendTheme();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //   <React.StrictMode>
  //     <BrowserRouter>
  //       <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
  //         <JoyProvider>
  //           <MsalProvider instance={msalInstance}>
  //             <Login />
  //           </MsalProvider>
  //         </JoyProvider>
  //       </MaterialCssVarsProvider>
  //     </BrowserRouter>
  //   </React.StrictMode>
  <React.StrictMode>
    <JoyProvider>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <App />
      </MaterialCssVarsProvider>
    </JoyProvider>
  </React.StrictMode>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
