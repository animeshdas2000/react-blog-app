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
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import { baseURL } from "../../helper";

function Login() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("")
  let navigate = useNavigate();
  const handleLogin=()=>{
    const userData=  JSON.stringify({
      email: email,
      password: password
    })
    let config={
      headers: { 
        'Content-Type': 'application/json'
      },
    }
    axios.post(`${baseURL}/api/auth/login`,userData,config)
      .then(res=>res.data)
      .then((data)=>{
        if(data.err){
          console.log(data.err)
        }
        else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          console.log("Login working") // Context pending
          navigate("/")
        }
          
      })
      .catch(err=>console.log(err))
  }
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <Button color="primary" onClick={toggle}>
        Login
      </Button>
      <Modal
        centered
        size="sm"
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 300 }}
      >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup>
              <Label for="exampleEmail" hidden>
                Email
              </Label>
              <Input
                name="email"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </FormGroup>
            <FormGroup >
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                autoComplete=""
              />
            </FormGroup>{" "}
            <div className="text-center">
            <Button onClick={handleLogin}>Submit</Button>
            <p>Don't have an Account?<br/> <Link to="/auth/register">Register Now</Link> </p>
            </div>
            
          </Form>
          
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
