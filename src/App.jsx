import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
