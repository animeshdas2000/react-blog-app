import React, { useState,useEffect } from "react";
import { useParams,useNavigate, } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import {baseURL, formatDate} from "../helper"

function BlogEditor() {
  let params = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  useEffect(()=>{
    axios.get(`${baseURL}/api/blog/${params.blogId}`)
      .then(res=>{
      setTitle(res.data.title);
      setBody(res.data.body)
      setImage(res.data.img)
      setDate(formatDate(res.data.date))
      })
      .catch(err=>console.log(err))
  },[])
  const handleSubmit = () => {
    const Blog = JSON.stringify({
      title: title,
      body: body,
      img: image,
      date: date,
    });
    let config = {
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("jwt"),
      },
    };
    axios
      .post(
        `${baseURL}/api/blog/edit/${params.blogId}`,
        Blog,
        config
      )
      .then(() => {
        navigate(`/blog/${params.blogId}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="col">
        <h2>Blog Editor</h2>
      </div>

      <Form>
        <FormGroup>
          <Input
            name="title"
            placeholder="Your Title Goes here"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="image"
            placeholder="Image Link"
            value={image}
            type="url"
            onChange={(e) => setImage(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="date"
    
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <textarea
            placeholder="Add your content here"
            name="text"
            className="form-control row-cols-10"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </FormGroup>
      </Form>
      <Button color="primary" onClick={handleSubmit}>
        PUBLISH
      </Button>
    </div>
  );
}

export default BlogEditor;
