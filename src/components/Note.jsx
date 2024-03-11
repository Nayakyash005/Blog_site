import React, { useState, useEffect } from "react";
import { API_URL } from "../App";
import axios from "axios";

function Note() {
  const [store, setStore] = useState([]);
  const [list, setList] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isClickBtn, setIsClickBtn] = useState(false);
  const [isClickBtn2, setIsClickBtn2] = useState(false);
  const [activeBlog, setactiveBlog] = useState(blog[0]);
  // const [deletedBlog, setdeleteBlog] = useState(blog[0]);

  async function deleteBlog(title, id) {
    await axios.get(API_URL + "/delete/" + id + "/" + title);
    get_user_name();
  }

  async function get_user_name() {
    let result = await axios.get(API_URL + "/user/name");
    setIsClickBtn(false);
    setBlog([]);

    setIsClickBtn2(false);
    setList(result.data);
  }

  async function getBlogcontent(id, tit) {
    setIsClickBtn(true);
    // await get_user_blog(id);
    let result = blog.filter((e) => e.title === tit);
    setactiveBlog(result);

    setIsClickBtn2(false);
  }

  useEffect(() => {
    get_user_name();
  }, []);

  async function get_user_blog(id) {
    let blog = await axios.get(API_URL + "/user/details/" + id);
    setBlog(blog.data);
    console.log(blog.data);
    setStore(blog.data);
    setIsClickBtn(false);
    setIsClickBtn2(false);
  }
  console.log(store);
  async function getFullBlog(id) {
    console.log(store);
    setBlog(store);
    setIsClickBtn2(true);
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
            {blog.map((ele) => {
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
          <div className="blog-container">
            <div className="blog-header">
              <h2>Latest Blogs</h2>
            </div>
            <div className="blog-list">
              {isClickBtn ? (
                <>
                  {activeBlog.map((ele) => (
                    <div key={ele.id} className="note-card">
                      <div className="img">
                        <img
                          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2clMjBzaXRlfGVufDB8fDB8fHww"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h3 className="note-title">{ele.title}</h3>
                        <p className="note-content">{ele.blog}</p>
                        <form action="/">
                          <button
                            onClick={() => {
                              deleteBlog(ele.title, ele.id);
                            }}
                            className="Delete-btn"
                          >
                            Delete
                          </button>
                        </form>
                        <button
                          onClick={() => {
                            setactiveBlog(blog);
                          }}
                          className="show-btn"
                        >
                          Show all{" "}
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {isClickBtn2 &&
                    blog.map((ele) => (
                      <div key={ele.id} className="note-card">
                        <div className="img">
                          <img
                            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2clMjBzaXRlfGVufDB8fDB8fHww"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h3 className="note-title">{ele.title}</h3>
                          <p className="note-content">{ele.blog}</p>
                          <form action="/">
                            <button
                              onClick={() => {
                                deleteBlog(ele.title, ele.id);
                              }}
                              className="Delete-btn"
                            >
                              Delete
                            </button>
                          </form>
                          <button
                            onClick={() => {
                              setactiveBlog(blog);
                            }}
                            className="show-btn"
                          >
                            Show all{" "}
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
    </>
  );
}

export default Note;
