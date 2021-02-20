import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    if (username.length > 5 && password.length > 5) {
      history.push("/search");
    }
  }
  return (
    <>
      <h1 className="text-center">SIGN IN</h1>
      <div className="container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="Password"
          placeholder="Enter Passcode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => login()}>
          Log In
        </button>
      </div>
    </>
  );
};
export default LoginPage;