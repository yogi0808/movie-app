import { BrowserRouter, Route, Routes } from "react-router"
import HomeScreen from "./screens/HomeScreen"

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
