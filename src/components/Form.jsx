import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { API_URL } from "../App";
import axios from "axios";
import { useState } from "react";

function Form() {
  const { user, loginWithRedirect, logout, isAuthenticated, isLoading } =
    useAuth0();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  async function getdata() {
    setemail(user.email);
    setname(user.name);
  }

  useEffect(() => {
    if (isAuthenticated) {
      getdata();
    }
  }, [isAuthenticated]);

  // Get the value of the 'name' parameter
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <>
      <div cla ssName="form-container">
        <div className="head">
          <h2> Enter your Details</h2>
        </div>
        <form action="/submit">
          <label htmlFor="name" className="frm">
            Name
          </label>
          <br></br>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            defaultValue={name}
          ></input>
          <br></br>
          <label htmlFor="number" className="frm">
            contact no
          </label>
          <br></br>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your contact No"
          ></input>
          <br></br>
          <label htmlFor="email" className="frm">
            email
          </label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
          ></input>
          <br></br>
          <label htmlFor="password" className="frm">
            security-Key
          </label>
          <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
          ></input>
          <br></br>
          <label htmlFor="name" className="frm">
            feedback
          </label>
          <br></br>
          <input
            type="text"
            id="feedback"
            name="feedback"
            placeholder="Enter your Blog"
          ></input>
          <br></br>
          <label htmlFor="name" className="frm">
            Title
          </label>
          <br></br>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
          ></input>
          <br></br>
          <br></br>
          <button className="btn">submit</button>
        </form>
      </div>
    </>
  ) : (
    <>
      <h2> Plz sign in </h2>
      <button className="login" onClick={() => loginWithRedirect()}>
        {" "}
        login With Google <i class="fa fa-google"></i>
      </button>
    </>
  );
}

export default Form;
