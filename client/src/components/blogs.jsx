import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiInstance } from "../axios";
function Blogs() {
  const [blogs,setBlogs]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/api/blog/all')
    .then(res=>console.log(res))

  },[])
  return (
    <div className="container">
      <div className="row">
        Hello
        {blogs.map((val, key) => {
          return (
            <div className="col">
              <div className="card" style={{ width: "fit-content" }} key={key}>
                <img src={val.img} width="200px" alt="" />
                <h4>{val.title}</h4>
                <p>
                  Published - <span>{val.title}</span>
                </p>
                <p>Excerpt</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
