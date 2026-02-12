import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import FilterContextProvider from "@contexts/FilterContext"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </StrictMode>,
)
