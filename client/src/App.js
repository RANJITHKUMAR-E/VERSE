import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import HomeInterface from "./interface/HomeInterface";

function App() {
  return (
    <>
      <Routes>
        {/* Page */}
        <Route path="" element={<Home />}>
          <Route path="" element={<HomeInterface />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
