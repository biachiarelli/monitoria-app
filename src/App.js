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


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastro-aluno" element={<RegisterStudant />} />
      <Route path="/home" element={<Home />} />
      <Route path="/horarios-disponiveis" element={<Schedules />} />
      <Route path="/buscar-monitor" element={<SearchMonitor />} />
      <Route path="/preferencias" element={<Preferences />} />
      <Route path="/perfil" element={<Profile />} />
            
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
