import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:9090/user/signup", {
        firstname,
        lastname,
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
        <h1 className="text-center mt-3">SignUp</h1>
        <div class="mb-3 mt-5">
          <label for="firstname" class="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            class="form-control"
            id="firstname"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 mt-5">
          <label for="lastname" class="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            class="form-control"
            id="lastname"
            aria-describedby="emailHelp"
          />
        </div>
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
            <Link to={'/signin'}>Already have an account!</Link>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
