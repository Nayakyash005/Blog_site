import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Form() {
  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setEmail(user.email);
      setName(user.name);
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Enter your Details</h2>
        <form>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            defaultValue={name}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Contact No
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your contact No"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Security Key
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="feedback"
            className="block text-gray-700 font-semibold mb-2"
          >
            Feedback
          </label>
          <input
            type="text"
            id="feedback"
            name="feedback"
            placeholder="Enter your feedback"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your title"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Please sign in</h2>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center"
        onClick={() => loginWithRedirect()}
      >
        Login with Google <i className="fa fa-google ml-2"></i>
      </button>
    </div>
  );
}

export default Form;
