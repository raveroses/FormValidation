import "./index.css";
import First from "./Page.jsx/First";
import SignUp from "./Page.jsx/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<First />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
