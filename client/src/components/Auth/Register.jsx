import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../helper";
function Register() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [cpassword,setCpassword] = useState("");
  let navigate = useNavigate();
  const handleLogin = () => {
    const userData = JSON.stringify({
        name:name,
      email: email,
      password: password,
        phone_no: phone

    });
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${baseURL}/api/auth/register`, userData, config)
      .then((res) => res.data)
      .then((data) => {
        if (data.err) {
          console.log(data.err);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("Register working"); // Context pending
          navigate("/");
        }
      })
      .catch((err) => console.log(err));

    console.log("Form Working")
  };

  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <Button color="primary" onClick={toggle}>
       Register
      </Button>
      <Modal
        centered
        size="sm"
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 300 }}
      >
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form inline>
          <FormGroup>
              
              <Input
                name="Name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
             
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="phoneNumber"
                placeholder="Phone Number"
                type="number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="true"
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                value={cpassword}
                onChange={(e) => {
                    setCpassword(e.target.value);
                  }}
                autoComplete=""
              />
            </FormGroup>{" "} */}
            <div className="text-center">

              <Button onClick={handleLogin}>Register</Button>
              <p>
                Already have an Account?<Link to="/auth/login">Login</Link>{" "}
              </p>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;
