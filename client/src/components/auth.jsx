import React from "react";
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

function Auth() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

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
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
            </FormGroup>{" "}
            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Auth;
