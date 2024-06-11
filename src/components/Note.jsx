import React, { useState, useEffect } from "react";
import { API_URL } from "../App";
import axios from "axios";

function Note() {
  const [store, setStore] = useState([]);
  const [list, setList] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isClickBtn, setIsClickBtn] = useState(false);
  const [isClickBtn2, setIsClickBtn2] = useState(false);
  const [activeBlog, setActiveBlog] = useState(blog[0]);

  async function deleteBlog(title, id) {
    await axios.get(API_URL + "/delete/" + id + "/" + title);
    getUserName();
  }

  async function getUserName() {
    let result = await axios.get(API_URL + "/user/name");
    setIsClickBtn(false);
    setBlog([]);
    setIsClickBtn2(false);
    setList(result.data);
  }

  async function getBlogContent(id, title) {
    setIsClickBtn(true);
    let result = blog.filter((e) => e.title === title);
    setActiveBlog(result);
    setIsClickBtn2(false);
  }

   useEffect(() => {
    getUserName();
  }, []);

  async function getUserBlog(id) {
    let userBlog = await axios.get(API_URL + "/user/details/" + id);
    setBlog(userBlog.data);
    setStore(userBlog.data);
    setIsClickBtn(false);
    setIsClickBtn2(false);
  }

  async function getFullBlog() {
    setBlog(store);
    setIsClickBtn2(true);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8">
      <div className="w-full md:w-1/3">
        <div className="dropdown">
          <label htmlFor="users" className="block font-semibold mb-2">
            Select User
          </label>
          <select
            name="users"
            onChange={(event) => getUserBlog(event.target.value)}
            id="users"
            className="w-full p-2 border border-gray-300 rounded"
          >
            {list.map((ele) => (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-4">
          {blog.map((ele) => (
            <div key={ele.id} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Blog Title</h3>
              <p className="text-gray-800">{ele.title}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => getBlogContent(ele.id, ele.title)}
              >
                See Blog
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="blog-container">
          <div className="blog-header">
            <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
          </div>
          <div className="space-y-8">
            {isClickBtn ? (
              <>
                {activeBlog.map((ele) => (
                  <div key={ele.id} className="bg-gray-100 p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Blog Title</h3>
                      <img
                        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2clMjBzaXRlfGVufDB8fDB8fHww"
                        alt="Blog Image"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-800">{ele.title}</p>
                    <p className="text-gray-600 mt-2">{ele.blog}</p>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => deleteBlog(ele.title, ele.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setActiveBlog(blog)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                      >
                        Show all
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {isClickBtn2 &&
                  blog.map((ele) => (
                    <div
                      key={ele.id}
                      className="bg-gray-100 p-4 rounded shadow"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Blog Title</h3>
                        <img
                          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2clMjBzaXRlfGVufDB8fDB8fHww"
                          alt="Blog Image"
                          className="w-24 h-24 object-cover rounded-full"
                        />
                      </div>
                      <p className="text-gray-800">{ele.title}</p>
                      <p className="text-gray-600 mt-2">{ele.blog}</p>
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => deleteBlog(ele.title, ele.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setActiveBlog(blog)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                          Show all
                        </button>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
