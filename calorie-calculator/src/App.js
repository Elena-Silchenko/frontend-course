import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="main-container">
          <div className="main-title">Calorie Calculator</div>
          <div className="main-btn">
            <Button variant="outline-light">
              Start here
            </Button>
          </div>

          <div>
            <FormCalculator />
          </div>
        </div>

      </div>
    </>
  );
}

function FormCalculator() {
  return (
    <>
      <Form>
        <div>
          <div>Choose your gender</div>
          <div>
            <Button variant="outline-light">Male</Button>
            <Button variant="outline-light">Female</Button>
          </div>

          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-light"
              title="Choose your activity level"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Minimal</Dropdown.Item>
              <Dropdown.Item href="#">Low</Dropdown.Item>
              <Dropdown.Item href="#">Avrage</Dropdown.Item>
              <Dropdown.Item href="#">High</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your height</Form.Label>
            <Form.Control type="number" placeholder="Enter height in cm" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your current weight</Form.Label>
            <Form.Control type="number" placeholder="Enter weight in kg" />
          </Form.Group>

          <Button variant="outline-dark">
            Calculate
          </Button>
        </div>
      </Form>
    </>
  );
}

export default App;
