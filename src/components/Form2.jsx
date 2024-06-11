import React from "react";

function Form2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Add Your Blog Post</h2>
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
              Blog
            </label>
            <input
              type="text"
              id="feedback"
              name="feedback"
              placeholder="Enter your blog"
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
    </>
  );
}

export default Form2;
