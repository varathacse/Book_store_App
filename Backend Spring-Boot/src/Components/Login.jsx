import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bookServices from "./BookService";

const Login = () => {
  const [emailId, setEmailId] = useState("va@gmail.com");
  const [password, setPassword] = useState("vamail");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const userData = { emailId, password };
      const response = await bookServices.userLogin(userData);
      console.log(response);
      const token = response.headers.get("Authorization");
      setData(response.data);
      localStorage.setItem("token", token);
      navigate(`/user/book`);
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="log">
        <form onSubmit={login}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              id="exampleInputEmail1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
