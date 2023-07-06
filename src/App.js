import "./assets/sass/main.scss";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import RegisterStudant from "./pages/RegisterStudant";
import Home from "./pages/Home";
import Schedules from "./pages/Schedules";
import SearchMonitor from "./pages/SearchMonitor";
import Preferences from "./pages/Preferences";
import Profile from "./pages/Profile";
import { useState } from "react";
import RegisterMonitor from "./pages/RegisterMonitor";
import HomeEmpty from "./pages/HomeEmpty";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/home" element={<HomeEmpty />} />
      <Route path="/cadastro-aluno" element={<RegisterStudant />} />
      <Route path="/cadastro-monitor" element={<RegisterMonitor />} />
      <Route path="/minhas-monitorias" element={<Home />} />
      <Route path="/calendario" element={<Schedules />} />
      <Route path="/monitores" element={<SearchMonitor />} />
      <Route path="/preferencias" element={<Preferences />} />
      <Route path="/perfil" element={<Profile />} />
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
