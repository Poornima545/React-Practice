import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (ev) => {
    setUserName(ev.target.value);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userName, email, password);
    setUserName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="app">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label for="#">UserName</label>
        <br />
        <input
          value={userName}
          onClick={handleUserNameChange}
          type="username"
        />
        <br />
        <label for="#">Email</label>
        <br />
        <input value={email} onClick={handleEmailChange} type="email" />
        <br />
        <label for="#">Password</label>
        <br />
        <input
          type="password"
          value={password}
          onClick={handlePasswordChange}
        />

        <br />
        <button>Register</button>
      </form>
      <p>
        Alreay a member? Login
      </p>
    </div>
  );
}

export default Login;
