import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Heading() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log("current user :", user);
  return (
    <header>
      <div className="main-header">
        <h1>
          {" "}
          <a href="/"> My Blog site! </a>
        </h1>

        {isAuthenticated && <h2> Hello {user.name}</h2>}
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

        {isAuthenticated ? (
          <button
            className="login"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button className="login" onClick={() => loginWithRedirect()}>
            {" "}
            login With Google <i class="fa fa-google"></i>
          </button>
        )}
      </div>
    </header>
  );
}

export default Heading;
