import React, { useState, useEffect } from "react";
import { API_URL } from "../App";
import axios from "axios";

function Note() {
  const [list, setList] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isClickBtn, setIsClickBtn] = useState(false);

  async function get_user_name() {
    let result = await axios.get(API_URL + "/user/name");
    setBlog([]);
    setList(result.data);
  }

  async function getBlogcontent(id) {
    setIsClickBtn(true);
    // await get_user_blog(id);
  }

  useEffect(() => {
    get_user_name();
  }, []);

  async function get_user_blog(id) {
    let blog = await axios.get(API_URL + "/user/details/" + id);
    setBlog(blog.data);
  }

  return (
    <>
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
        {blog.length > 0 &&
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
                  onClick={() => getBlogcontent(ele.id)}
                >
                  {" "}
                  see blog
                </button>
              </div>
            );
          })}
      </div>

      {isClickBtn && blog.length > 0 && (
        <div className="blog-container">
          {blog.map((ele) => {
            return (
              <div key={ele.id} className="par-blog-title">
                <div className="Note-card">
                  <h3>{ele.title}</h3>
                  <br></br>
                  <h4 className="my">{ele.blog}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Note;
