import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import FormularioCliente from './FormularioCliente';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/register">Registrarse</Link> | 
        <Link to="/login">Acceso</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Página de inicio</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       <Route path="/formulario" element={<FormularioCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
