import React, { useState,useEffect } from "react";

import {IoArrowBackOutline} from "react-icons/io5"
import {useParams,Link} from "react-router-dom";
import axios from "axios"
import {Button} from "reactstrap"
import {baseURL, formatDate} from "../helper.js"


function Blog() {
  let params = useParams();
  // const [like,setLike] = useState(true)
  const [blog,setBlog]= useState([]);
  useEffect(()=>{
    axios.get(`${baseURL}api/blog/${params.blogId}`)
      .then(res=>{console.log(res.data)
      setBlog(res.data)
      })
      .catch(err=>console.log(err))
  },[])
 
  return (
    <>
    <div className="d-flex justify-content-between container mt-3">
    <Link to="/blog/all">
    <IoArrowBackOutline /> Go back
    </Link>
    <h2>React Blogs</h2>
    
    <Link to={`/blog/${params.blogId}/edit`}>
      <Button color="secondary">
      Edit
      </Button>
      </Link>
    
    </div>
    <div className="container">
      <h1>{blog.title}</h1>
      <img src={blog.img} style={{ objectFit: "cover" }} width="100%" height="400px" alt=""/>
      <span>{blog.author}</span> <br />
      <span>{formatDate(blog.updatedAt)}</span>
      <div>
        <p>{blog.body}</p>
      </div>
    </div></>
  );
}

export default Blog;
