import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      {/* Home Page / Main Page */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
