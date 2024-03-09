import React, { useState, useEffect } from "react";
import { API_URL } from "../App";
import axios from "axios";

function Note() {
  const [list, setList] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isClickBtn, setIsClickBtn] = useState(false);

  async function get_user_name() {
    let result = await axios.get(API_URL + "/user/name");
    setIsClickBtn(false);
    setBlog([]);
    setList(result.data);
  }

  async function getBlogcontent(id, tit) {
    setIsClickBtn(true);
    // await get_user_blog(id);
    let result = blog.filter((e) => e.title === tit);
    setBlog(result);
  }

  useEffect(() => {
    get_user_name();
  }, []);

  async function get_user_blog(id) {
    let blog = await axios.get(API_URL + "/user/details/" + id);
    setBlog(blog.data);
    console.log(blog.data);
    setIsClickBtn(false);
  }

  return (
    <>
      <div className="per">
        <div className="section-1">
          <div className="dropdown">
            <label htmlFor="users" className="select">
              Select User
            </label>
            <select
              name="users"
              onChange={(event) => {
                get_user_blog(event.target.value);
              }}
              id="users"
            >
              {list.map((ele) => {
                return (
                  <option key={ele.id} value={ele.id}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="par-Notes">
            {1 &&
              blog.map((ele) => {
                return (
                  <div key={ele.id} className="par-blog-title">
                    <div className="Note-card">
                      <h3> Blog Title</h3>
                      <br></br>
                      <h4 className="my">{ele.title}</h4>
                    </div>
                    <button
                      className="blog-btn"
                      onClick={() => getBlogcontent(ele.id, ele.title)}
                    >
                      {" "}
                      see blog
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="section-2">
          {isClickBtn && blog.length > 0 && (
            <div className="blog-container">
              <div className="blog-header">
                <h2>Latest Blogs</h2>
              </div>
              <div className="blog-list">
                {blog.map((ele) => (
                  <div key={ele.id} className="note-card">
                    <h3 className="note-title">{ele.title}</h3>
                    <p className="note-content">{ele.blog}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Note;
