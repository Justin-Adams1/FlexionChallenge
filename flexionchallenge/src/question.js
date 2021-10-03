import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Test(props) {
  const [test, setTest] = useState({question: {
    input : props.data.question.input,
    unitOfMeasurement : props.data.question.unitOfMeasurement,
    targetUnit : props.data.question.targetUnit,
    studentResponse : props.data.question.studentResponse,
  }});
  const counter = 1;

  console.log("props", test)

  return (
    <Container>
      <Row>
        <h4>
          Question #{counter}:
          <Col>
            <input type="dropdown">
            </input>
          </Col>
        </h4>
      </Row>
    </Container>
  );
}

export default Test;
