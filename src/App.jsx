import { BrowserRouter, Route, Routes } from "react-router"
<<<<<<< Updated upstream
=======
import HomeScreen from "./screens/HomeScreen"
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
<<<<<<< Updated upstream
          element={<h1>Hello</h1>}
=======
          element={<HomeScreen />}
>>>>>>> Stashed changes
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
