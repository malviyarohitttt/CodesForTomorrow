import axios from "axios";
import {Link} from "react-router-dom";
import React, { useState } from "react";


function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:9090/user/signin", {
        email,
        password,
      });
      if (response.data.status) {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="text-center mt-3">Signin</h1>

        <div class="mb-3 mt-5">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mt-4">
            <Link to={'/signup'}>Don't have an account</Link>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signin;
