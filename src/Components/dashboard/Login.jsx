import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useToastify } from "../../context/clientSide-context";
export default function Login() {
  {
    /* Data From Context Toastify! */
  }
  const {
    loginFormSubmit,
    loginEmailChanged,
    loginPasswordChanged,
    loginEmail,
    loginPassword,
  } = useToastify();

  const navigate = useNavigate();
  return (
    <div>
      {/*Login Form Overall Container !*/}
      <div id="login-form-container">
        {/*Login Form ! */}
        <form action="" onSubmit={loginFormSubmit} id="login-form">
          {/*Login Form Welcome text !*/}
          <div id="login-welcome">
            <span>Welcome!</span>
            <span id="text-under-welcome">Sign in to continue</span>
          </div>

          {/*Login Form Input !*/}
          <span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="login-field"
              onChange={loginEmailChanged}
              value={loginEmail}
              required
            />
          </span>

          <span>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login-field"
              onChange={loginPasswordChanged}
              value={loginPassword}
              required
            />
          </span>

          <span>
            <button type="submit" className="login-button">
              Login
            </button>
          </span>
          <div id="have-account">
            Don't have an account?{" "}
            <span id="sign-up-text" onClick={() => navigate("/joinus")}>
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
