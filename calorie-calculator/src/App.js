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

function FormCalculator({ show, onHide }) {
  const [data, setData] = useState({
    gender: "",
    activity: undefined,
    age: undefined,
    height: undefined,
    weight: undefined,
  });

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
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
                      <Button variant={(data.gender === gen) ? "dark" : "outline-dark"} onClick={() => setData({ ...data, gender: gen })}>
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
                  title={data.activity ? data.activity : "Select your activity"}
                >
                  {
                    Activities.map(act => (
                      <Dropdown.Item active={data.activity === act} onClick={() => setData({ ...data, activity: act })}>
                        {act}
                      </Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </InputGroup>

              <Form.Group className="form-age mb-3" controlId="formBasicEmail">
                <Form.Label>Your age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} />
              </Form.Group>
                
              <Form.Group className="form-height mb-3" controlId="formBasicEmail">
                <Form.Label>Your height</Form.Label>
                <Form.Control type="number" placeholder="Enter height in cm" value={data.height} onChange={(e) => setData({ ...data, height: e.target.value })} />
              </Form.Group>
                  
              <Form.Group className="form-weight mb-3" controlId="formBasicEmail">
                <Form.Label>Your current weight</Form.Label>
                <Form.Control type="number" placeholder="Enter weight in kg" value={data.weight} onChange={(e) => setData({ ...data, weight: e.target.value })} />
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
