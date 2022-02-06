import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import {Button} from "reactstrap"
function Blogs() {
  const [blogs,setBlogs]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/blog/all")
      .then(res=>{console.log(res.data)
      setBlogs(res.data)
      })
      .catch(err=>console.log(err))
  },[])
  return (
    <div className="container">
      <h1 className="text-center">Blogs</h1>
      <div className="row">
      
        {blogs.map((val, key) => {
          return (
            <div className="col" key={key}>
              <div className="card p-4" style={{ width: "fit-content" }} >
                <img src={val.img} width="200px" height="200px" style={{objectFit:"cover"}} alt="" />
                <h4>{val.title}</h4>
                <p>
                  <span>{val.author} </span> <br />
                  
                  <span>{val.updatedAt} </span>
                </p>
                <p>{val.body}</p>
                <Link to={`/blog/${val._id}`}>Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
