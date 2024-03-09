import React from "react";

function Form() {
  return (
    <>
      <div className="form-container">
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
            E-mail
          </label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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
  );
}

export default Form;
