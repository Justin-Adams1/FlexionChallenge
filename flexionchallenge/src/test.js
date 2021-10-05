import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Question from "./question";

function Test() {

  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const counter = 0;


  const questionSelect = (event) => {
    setIsSelected(true);
  };

  return (
    <Container>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      ></link>
      <Row>
        <h2>
          Test for:
          <input type="textarea" onChange={questionSelect}/>
        </h2>
      </Row>
      {isSelected?
        <Question/>
        :
        <>
        </>
      }
    </Container>
  );
}

export default Test;
