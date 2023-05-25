import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from 'react';

import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="main-container">
          <div className="main-title">Calorie Calculator</div>
          <div className="main-btn">
            <Button variant="outline-light" onClick={() => setModalShow(true)}>
              Start here
            </Button>
          </div>

          <div>
            <FormCalculator 
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>

      </div>
    </>
  );
}

const GenderIdentity = [
  "Male",
  "Female"
]

const Activities = [
  "Minimal",
  "Low",
  "Average",
  "High"
]

function FormCalculator(props) {
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState(undefined);
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
            Calorie Calculator for Weight Management
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <div className="form-gender">
                <div className="form-title">Choose your gender</div>
                <div className="form-btns">
                  {
                    GenderIdentity.map(gen => (
                      <Button variant={(gender === gen) ? "dark" : "outline-dark"} onClick={() => setGender(gen)}>
                        {gen}
                      </Button>
                    ))
                  }
                </div>
              </div>

              <InputGroup className="activity-btn mb-3">
                <Dropdown.Header>Choose your activity</Dropdown.Header>
                <DropdownButton
                  variant="outline-dark"
                  title={activity ? activity : "Select your activity"}
                >
                  {
                    Activities.map(act => (
                      <Dropdown.Item active={activity === act} onClick={() => setActivity(act)}>
                        {act}
                      </Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </InputGroup>

              <Form.Group className="form-age mb-3" controlId="formBasicEmail">
                <Form.Label>Your age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
              </Form.Group>
                
              <Form.Group className="form-height mb-3" controlId="formBasicEmail">
                <Form.Label>Your height</Form.Label>
                <Form.Control type="number" placeholder="Enter height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
              </Form.Group>
                  
              <Form.Group className="form-weight mb-3" controlId="formBasicEmail">
                <Form.Label>Your current weight</Form.Label>
                <Form.Control type="number" placeholder="Enter weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="calculate-btn">
          <Button variant="outline-dark">
            Calculate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
