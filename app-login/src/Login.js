import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (user === "Jorge" && password === "Admin") {
      setIsAuthenticated(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="login-box">
        {!isAuthenticated ? (
          <>
            <h2>Iniciar Sesión</h2>
            <div className="input-group">
              <label>Usuario:</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn login" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </>
        ) : (
          <>
            <h2>¡Bienvenido, {user}!</h2>
            <button className="btn logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}
