import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import LoadingProvider from "./Context/LoadingContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
)
