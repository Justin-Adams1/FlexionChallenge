import "./App.css";
import Container from "react-bootstrap/Container";
import Test from "./test";

// I broke this down into several modules that are easier to maintain in the future
// A module for the Test will allow for dynamic adjustments later on


function App() {
  return (
    <div className="App">
      <Container>
        <h1>Conversion Grading Tool</h1>
        <Test />
      </Container>
    </div>
  );
}

export default App;
