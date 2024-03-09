import React from "react";

function Form2() {
  return (
    <>
      <div className="form-container">
        <div className="head">
          <h2> Add Your Blog Post</h2>
        </div>
        <form action="/additon">
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
            Blog
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

export default Form2;
