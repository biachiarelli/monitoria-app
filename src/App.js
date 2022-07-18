import "./assets/sass/main.scss";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import RegisterStudant from "./pages/RegisterStudant";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastro-aluno" element={<RegisterStudant />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
