import React from "react";

function Heading() {
  return (
    <header>
      <div className="main-header">
        <h1>
          {" "}
          <a href="/"> My Blog site! </a>
        </h1>
        <div className="space-provider"></div>
        <form action="/add">
          <button className="add"> Add Blog</button>
        </form>
        <form action="/login">
          <button className="login">
            {" "}
            login <i class="fa fa-user-circle-o style "></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Heading;
