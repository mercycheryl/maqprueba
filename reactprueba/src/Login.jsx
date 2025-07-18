import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login exitoso");
      navigate('/formulario');

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Iniciar Sesión</button>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </form>
  );
}

export default Login;
