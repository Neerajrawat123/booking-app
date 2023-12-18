import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/usercontext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      setUser(data);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("login failed");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around mt-44">
      <div className="mb-64 w-full">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form
          className="max-w-md mx-auto flex  flex-col justify-between"
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            className="mb-4 p-4 border rounded-2xl"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            className="p-4 mb-4 border rounded-2xl"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="bg-red-600 text-white py-2 rounded">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to={"/Fregister"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
