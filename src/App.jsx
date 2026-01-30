import { BrowserRouter, Route, Routes } from "react-router"
import HomeScreen from "./screens/HomeScreen"

/**
 * this is a root component of the application hear i created and and setup the routers
 *
 * @returns - created routers
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
