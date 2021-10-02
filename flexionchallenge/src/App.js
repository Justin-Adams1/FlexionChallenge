import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Test from './test';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Conversion Grader</h1>
        <Col>
        <Test>
          </Test>
        </Col>
      </Container>
    </div>
  );
}

export default App;
