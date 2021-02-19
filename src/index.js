import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import history from "./history";
import { Router } from "react-router-dom";
Sentry.init({
  dsn: "https://2a572cb1209d4bb9ada7c366d6ac79fa@o522811.ingest.sentry.io/5634705",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
