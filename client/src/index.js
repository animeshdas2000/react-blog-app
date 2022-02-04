import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Auth from "./components/auth";
import Blogs from "./components/blogs";
import Blog from "./components/blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogEditor from "./components/BlogEditor";

ReactDOM.render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blog/all" element={<Blogs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/blogId/edit" element={<BlogEditor/>}/>
      <Route path="auth" element={<Auth/>} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
