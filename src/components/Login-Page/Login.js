import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="app">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label for="#">Email</label>
        <br />
        <input value={email} onClick={handleChange} type="email" />

        <br />
        <label for="#">Password</label>
        <br />
        <input
          type="password"
          value={password}
          onClick={handlePasswordChange}
        />
        <br />
        <button className="login">LOGIN</button>
        <br />
        <button className="user">GET USER</button>
      </form>
      <p>
        Not a member yet?  Register
      </p>
    </div>
  );
}

export default Login;

