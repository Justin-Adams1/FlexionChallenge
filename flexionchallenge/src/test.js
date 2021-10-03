import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Question from './question';

function Test() {
  const [test, setTest] = useState({question: {
    input : "",
    unitOfMeasurement : "",
    targetUnit : "",
    studentResponse : "",
  }});

  return (
    <Container>
      <Row>
        <h2>
          Test for: 
          <input type="text" default="Student Name">
          </input>
        </h2>
      </Row>

      <Question data={test}>        
      </Question>

    </Container>
  );
}

export default Test;
