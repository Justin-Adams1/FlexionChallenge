import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useRef } from 'react';

const Question = (props)=>{
   
  const [input, addInput] = useState();

  const [unitOfMeasurement, selectUnitOfMeasurement] = useState();

  const [targetUnit, setTargetUnit] = useState();

  const [studentResponse, setStudentResponse] = useState();

  console.log(props);

  return (
    <Container>
        <Row>
            <Col>
                <input type="text" id="input" name="input" default={props.input}>
                </input>
            </Col>
            <Col>
                <input type="text" id="unitOfMeasurement" name="unitOfMeasurement"default={props.input}>
                </input>
            </Col>
            <Col>
                <input type="text" id="targetUnit" name="targetUnit"default={props.input}>
                </input>
            </Col>
            <Col>
                <input type="text" id="studentResponse" name="studentResponse"default={props.input}>
                </input>
            </Col>
        </Row>
            
        <Row>
          <Button variant="primary" onClick={()=>addQuestion(test)}>Add Question to Student Test</Button>
        </Row>

    </Container>
  )
}

export default Question;
