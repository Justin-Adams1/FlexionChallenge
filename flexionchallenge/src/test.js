import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useRef } from 'react';
import Question from './question';

function Test() {

  
  const [test, setTest] = useState([]);

  setTest(
    input: "",
    unitOfMeasurement= "",
    targetUnit= "",
    tudentResponse= "",
  )

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="name" placeholder="Student" />
          </Form.Group>
        </Row>
        <Question data={test}>
          </Question>
        <Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default Test;
