import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./pages/layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
