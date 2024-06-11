import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Heading() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          <a href="/">My Blog Site!</a>
        </h1>

        {isAuthenticated && <h2 className="text-white">Hello {user.name}</h2>}

        <div className="space-provider"></div>

        <button className="add bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Add Blog
        </button>

        {isAuthenticated ? (
          <button
            className="login bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button
            className="login bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={() => loginWithRedirect()}
          >
            Login With Google <i className="fa fa-google ml-2"></i>
          </button>
        )}
      </div>
    </header>
  );
}

export default Heading;
