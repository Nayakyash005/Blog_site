import React from "react";
import Heading from "./components/Heading";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import Note from "./components/Note";

function Home() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Heading />

      <div className="flex-grow flex flex-col items-center justify-center">
        {isAuthenticated ? (
          <Note />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Please sign in</h2>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center"
              onClick={() => loginWithRedirect()}
            >
              Login with Google <i className="fa fa-google ml-2"></i>
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
