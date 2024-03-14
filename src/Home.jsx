import React from "react";
import Heading from "./components/Heading";
import { useAuth0 } from "@auth0/auth0-react";

import Footer from "./components/Footer";
import Note from "./components/Note";

function Home() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div style={{ minHeight: "100%" }}>
      <Heading />

      {isAuthenticated ? (
        <Note />
      ) : (
        <>
          <h2> Plz sign in </h2>
          <button className="login" onClick={() => loginWithRedirect()}>
            {" "}
            login With Google <i class="fa fa-google"></i>
          </button>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;
