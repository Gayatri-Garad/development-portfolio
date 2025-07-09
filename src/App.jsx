import "./App.css";
import Homepage from "./components/Homepage";
import Mealinfo from "./components/Mealinfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/:mealid" element={<Mealinfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
