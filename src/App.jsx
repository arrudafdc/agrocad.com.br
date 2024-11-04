import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log("Base URL:", baseUrl); // Isso deve refletir o valor correto

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
