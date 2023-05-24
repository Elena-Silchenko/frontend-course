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

function FormCalculator(props) {
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
                  <Button variant="outline-dark">Male</Button>
                  <Button variant="outline-dark">Female</Button>
                </div>
              </div>

              <InputGroup className="activity-btn mb-3">
                <DropdownButton
                  variant="outline-dark"
                  title="Choose your activity level"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Minimal</Dropdown.Item>
                  <Dropdown.Item href="#">Low</Dropdown.Item>
                  <Dropdown.Item href="#">Avrage</Dropdown.Item>
                  <Dropdown.Item href="#">High</Dropdown.Item>
                </DropdownButton>
              </InputGroup>

              <Form.Group className="form-age mb-3" controlId="formBasicEmail">
                <Form.Label>Your age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" />
              </Form.Group>

              <Form.Group className="form-height mb-3" controlId="formBasicEmail">
                <Form.Label>Your height</Form.Label>
                <Form.Control type="number" placeholder="Enter height in cm" />
              </Form.Group>

              <Form.Group className="form-weight mb-3" controlId="formBasicEmail">
                <Form.Label>Your current weight</Form.Label>
                <Form.Control type="number" placeholder="Enter weight in kg" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="calculate-btn">
          <Button variant="outline-dark" onClick={props.onHide}>
            Calculate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
