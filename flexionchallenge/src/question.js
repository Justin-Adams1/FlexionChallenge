import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

var convert = require("convert-units");

function Test(props) {
  const [question1a, setQuestion1a] = useState("0");
  const [question1b, setQuestion1b] = useState("F");
  const [question1c, setQuestion1c] = useState("R");
  const [question1d, setQuestion1d] = useState();
  const [answer1, setAnswer1] = useState(1);
  const [result1, setResult1] = useState();

  const [question2a, setQuestion2a] = useState("0");
  const [question2b, setQuestion2b] = useState("F");
  const [question2c, setQuestion2c] = useState("R");
  const [question2d, setQuestion2d] = useState();
  const [answer2, setAnswer2] = useState(1);
  const [result2, setResult2] = useState();

  const [question3a, setQuestion3a] = useState("0");
  const [question3b, setQuestion3b] = useState("F");
  const [question3c, setQuestion3c] = useState("R");
  const [question3d, setQuestion3d] = useState();
  const [answer3, setAnswer3] = useState(1);
  const [result3, setResult3] = useState();

  const [question4a, setQuestion4a] = useState("0");
  const [question4b, setQuestion4b] = useState("F");
  const [question4c, setQuestion4c] = useState("R");
  const [question4d, setQuestion4d] = useState();
  const [answer4, setAnswer4] = useState(1);
  const [result4, setResult4] = useState();

  const [question5a, setQuestion5a] = useState("0");
  const [question5b, setQuestion5b] = useState("F");
  const [question5c, setQuestion5c] = useState("R");
  const [question5d, setQuestion5d] = useState();
  const [answer5, setAnswer5] = useState(1);
  const [result5, setResult5] = useState();

  const convertProblems = () => {
    setAnswer1(convert(question1a).from(question1b).to(question1c));
        if(answer1 === question1d){
            setResult1("Correct");
        }
        else
            setResult1("Incorrect");
        console.log("question1d", question1d);
        console.log("answer1", answer1);
    setAnswer2(convert(question2a).from(question2b).to(question2c));
    if(answer2 === question2d){
        setResult2("Correct");
    }
    else
        setResult2("Incorrect");
    setAnswer3(convert(question3a).from(question3b).to(question3c));
    if(answer3 === question3d){
        setResult3("Correct");
    }
    else
        setResult3("Incorrect");
    setAnswer4(convert(question4a).from(question4b).to(question4c));
    if(answer4 === question4d){
        setResult4("Correct");
    }
    else
        setResult4("Incorrect");
    setAnswer5(convert(question5a).from(question5b).to(question5c));
    if(answer5 === question5d){
        setResult5("Correct");
    }
    else
        setResult5("Incorrect");
  };

  useEffect(() =>{
      setQuestion1d();
      setQuestion2d();
      setQuestion3d();
      setQuestion4d();
      setQuestion5d();
  }, [])

  return (
    <Container>
      <datalist id="unitOfMeasurement">
        <option>K</option>
        <option>C</option>
        <option>F</option>
        <option>R</option>
        <option>l</option>
        <option>Tbs</option>
        <option>in3</option>
        <option>cup</option>
        <option>ft3</option>
        <option>gal</option>
      </datalist>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Enter Problem</th>
            <th>Input Unit of Measure</th>
            <th>Target Unit of Measure</th>
            <th>Student Response</th>
            <th>Grade?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion1a(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion1b(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion1c(e.target.value)}
              />
            </td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion1d(e.target.value)}
              />
            </td>
            <h4>{result1}</h4>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion2a(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion2b(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion2c(e.target.value)}
              />
            </td>
            <td>              
            <input
                type="textarea"
                onChange={(e) => setQuestion2d(e.target.value)}
              ></input>
            </td>
            {
            (question2d === answer2)
              ? <h4>Correct</h4>
              : <></>
            }
          </tr>
          <tr>
            <td>3</td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion3a(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion3b(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion3c(e.target.value)}
              />
            </td>
            <td>
              
            <input
                type="textarea"
                onChange={(e) => setQuestion3d(e.target.value)}
              ></input>
              </td>
              {
              ((question3d === answer3) && question3d !== "")
                ? <h4>Correct</h4>
                : <></>
              }
            </tr>
          <tr>
            <td>4</td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion4a(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion4b(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion4c(e.target.value)}
              />
            </td>
            <td>
              
            <input
                type="textarea"
                onChange={(e) => setQuestion4d(e.target.value)}
              ></input>
              </td>
              {
              (question4d === answer4)
                ? <h4>Correct</h4>
                : <></>
              }
            </tr>
          <tr>
            <td>5</td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion5a(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion5b(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                list="unitOfMeasurement"
                onChange={(e) => setQuestion5c(e.target.value)}
              />
            </td>
            <td>
              
            <input
                type="textarea"
                onChange={(e) => setQuestion5d(e.target.value)}
              ></input>
              </td>
              {
              (question5d === answer5)
                ? <h4>Correct</h4>
                : <></>
              }
            </tr>
        </tbody>
      </Table>
      <button onClick={convertProblems}>Grade</button>
    </Container>
  );
}

export default Test;
