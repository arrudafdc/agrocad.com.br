import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { FarmerRegister } from "./pages/Admin/Register/FarmerRegister";
import { RancherRegister } from "./pages/Admin/Register/RancherRegister";
import { FisherRegister } from "./pages/Admin/Register/FisherRegister";
import { Dashboard } from "./pages/Admin/Dashboard";
import { MilkProducerRegister } from "./pages/Admin/Register/MilkProducerRegister";
import { UserRegister } from "./pages/Admin/Register/UserRegister";

function App() {
  return (
    <BrowserRouter basename="/agrocad.com.br/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" index element={<Dashboard />} />
          <Route path="agricultor" element={<FarmerRegister />} />
          <Route path="pecuarista" element={<RancherRegister />} />
          <Route path="pescador" element={<FisherRegister />} />
          <Route path="produtor-leite" element={<MilkProducerRegister />} />
          <Route path="conta" element={<UserRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
