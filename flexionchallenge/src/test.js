import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Question from "./question";

// On each test, I originally had it set up to Map through an array of questions on the screen.
// To ensure that the requirements for the assessment were successfully completed, I created
// a static version of the test. 

function Test() {
  const [isSelected, setIsSelected] = useState(false);

  const enterName = (event) => {
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
          Enter Student Name:
          <input type="textarea" onChange={enterName} />
        </h2>
      </Row>
      {isSelected ? <Question /> : <></>}
    </Container>
  );
}

export default Test;
