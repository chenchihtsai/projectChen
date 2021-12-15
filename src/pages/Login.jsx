import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const nameSystem = "chen";
const passSystem = "enter123";

const Login = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const onClick = () => {
    if (name == nameSystem && pass == passSystem) {
      history.push("/categories");
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="login-box">
      <h1>Login here</h1>
      <label htmlFor="username">Username</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="pass"
        type="password"
        pass="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="button" onClick={(e) => {onClick();}}>Iniciar</button>
    </div>
  );
};

export default Login;
