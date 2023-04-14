import "./assets/sass/main.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  redirect
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
import { useSelector } from "react-redux";

function App() {
  const [token, setToken] = useState();

  // Control the routes only on user logged in
  const { userData } = useSelector(state => state)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro-aluno" element={<RegisterStudant />} />
        <Route path="/cadastro-monitor" element={<RegisterMonitor />} />
        {userData.id ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/horarios-disponiveis" element={<Schedules />} />
            <Route path="/buscar-monitor" element={<SearchMonitor />} />
            <Route path="/preferencias" element={<Preferences />} />
            <Route path="/perfil" element={<Profile />} />
          </>
        ) : (
          <>
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </>
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
