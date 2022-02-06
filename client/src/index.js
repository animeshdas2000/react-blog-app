import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Auth from "./components/Auth/Login";
import Register from "./components/Auth/Register"
import Blogs from "./components/blogs";
import Blog from "./components/blog";
import BlogEditor from "./components/BlogEditor";
import Create from "./components/createBlog";
import Header from "./components/header";

ReactDOM.render(
 
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blog/all" element={<Blogs />} />
      <Route path="blog/:blogId" element={<Blog />} />
      <Route path="blog/:blogId/edit" element={<BlogEditor/>}/>
      <Route path="blog/create" element={<Create/>}/>
      <Route path="auth/login" element={<Auth/>} />
      <Route path="auth/register" element={<Register/>} />
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
