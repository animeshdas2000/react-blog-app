import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button,Container,Form,FormGroup,Input } from "reactstrap";
import { baseURL } from "../helper";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = () => {
    const Blog = JSON.stringify({
      title: title,
      body: body,
      img: image,
    });
    let config = {
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("jwt"),
      },
    };
    axios
      .post(`${baseURL}/api/blog/create`, Blog, config)
      .then((res) => {
        setTitle("");
        setBody("");
        setImage("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    
    <Container >
    <h3>Write a New Blog</h3>
      <Form>
        <FormGroup>
          <Input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="url"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <textarea
            type="text"
            placeholder="Add your content here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control row-cols-10"
            rows="10"
          ></textarea>
        </FormGroup>
      </Form>

      <Button onClick={handleSubmit} color="primary">
        PUBLISH
      </Button>
      </Container>
    </>
  );
}

export default Create;
