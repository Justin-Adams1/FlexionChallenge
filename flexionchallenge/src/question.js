import "./App.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

// At the bottom of the Test, there is a submit button. It currently does not do anything, 
// but I thought that having it there would show what I had in mind for future development.

// Once a test is graded, what would the teacher want to do with the results? I could add their overall
// grade to a database even with this button. 

// Once a test has been submitted, the page would refresh for the next student. I tried to 
// keep a design that would be useful for a teacher trying to save time on their grading. They
// won't use a tool, if using it doesn't save time in a simple way.

var convert = require("convert-units");

function Test(props) {
  const [question1a, setQuestion1a] = useState("0");
  const [question1b, setQuestion1b] = useState("F");
  const [question1c, setQuestion1c] = useState("R");
  const [question1d, setQuestion1d] = useState("");
  const [answer1, setAnswer1] = useState(1);
  const [result1, setResult1] = useState();
  const [rounded1, setRounded1] = useState();

  const [question2a, setQuestion2a] = useState("0");
  const [question2b, setQuestion2b] = useState("F");
  const [question2c, setQuestion2c] = useState("R");
  const [question2d, setQuestion2d] = useState("");
  const [answer2, setAnswer2] = useState(1);
  const [result2, setResult2] = useState();
  const [rounded2, setRounded2] = useState();

  const [question3a, setQuestion3a] = useState("0");
  const [question3b, setQuestion3b] = useState("F");
  const [question3c, setQuestion3c] = useState("R");
  const [question3d, setQuestion3d] = useState("");
  const [answer3, setAnswer3] = useState(1);
  const [result3, setResult3] = useState();
  const [rounded3, setRounded3] = useState();

  const [question4a, setQuestion4a] = useState("0");
  const [question4b, setQuestion4b] = useState("F");
  const [question4c, setQuestion4c] = useState("R");
  const [question4d, setQuestion4d] = useState("");
  const [answer4, setAnswer4] = useState(1);
  const [result4, setResult4] = useState();
  const [rounded4, setRounded4] = useState();

  const [question5a, setQuestion5a] = useState("0");
  const [question5b, setQuestion5b] = useState("F");
  const [question5c, setQuestion5c] = useState("R");
  const [question5d, setQuestion5d] = useState("");
  const [answer5, setAnswer5] = useState(1);
  const [result5, setResult5] = useState();
  const [rounded5, setRounded5] = useState();

  // In the function ConvertProblems, I incorrectly used toFixed originally to 'round' the input 
  // for the convert module to then work on. This is incorrect because it is not true rounding, but a 
  // shaving off of the digits. In the examples I used to test the feature, it worked on a surface level
  // because the numbers I was using just happened to round down, so I didn't notice. 

  const convertProblems = () => {
    try {
      setAnswer1(
        convert((Math.round(question1a * 10) / 10)).from(question1b).to(question1c).toFixed(1)
      );
      setAnswer2(
        convert(question2a).from(question2b).to(question2c).toFixed(1)
      );
      setAnswer3(
        convert(question3a).from(question3b).to(question3c).toFixed(1)
      );
      setAnswer4(
        convert(question4a).from(question4b).to(question4c).toFixed(1)
      );
      setAnswer5(
        convert(question5a).from(question5b).to(question5c).toFixed(1)
      );

      setRounded1((Math.round(question1d * 10) / 10).toFixed(1));
      setRounded2((Math.round(question2d * 10) / 10).toFixed(1));
      setRounded3((Math.round(question3d * 10) / 10).toFixed(1));
      setRounded4((Math.round(question4d * 10) / 10).toFixed(1));
      setRounded5((Math.round(question5d * 10) / 10).toFixed(1));

      if (answer1 === rounded1) {
        setResult1("Correct");
      } else setResult1("Incorrect");
      if (answer2 === rounded2) {
        setResult2("Correct");
      } else setResult2("Incorrect");
      if (answer3 === rounded3) {
        setResult3("Correct");
      } else setResult3("Incorrect");
      if (answer4 === rounded4) {
        setResult4("Correct");
      } else setResult4("Incorrect");
      if (answer5 === rounded5) {
        setResult5("Correct");
      } else setResult5("Incorrect");
    } catch (error) {}
  };

  // Using a useEffect here for unit conversions serves two purposes: To immediately give feedback
  // to see if a problem is correct, and to Refresh the DOM after information has been entered.

  useEffect(() => {
    convertProblems();
  });

  return (
    <Container>
      <Table striped className="test">
        <thead>
          <tr>
            <th style={{ textAlign:"center"}}>#</th>
            <th style={{ textAlign:"center"}}>Initial Value</th>
            <th style={{ textAlign:"center"}}>Input Unit of Measure</th>
            <th style={{ textAlign:"center"}}>Target Unit of Measure</th>
            <th style={{ textAlign:"center"}}>Student Response</th>
            <th style={{ textAlign:"center"}}>Grade?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: 'black' }}>1</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion1a(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion1b(e.target.value)}
              >
                <option value=""></option>
                <option value="K">Kelvin</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="R">Rankine</option>
                <option value="l">Liter</option>
                <option value="Tbs">Tablespoons</option>
                <option value="in3">Cubic Inches</option>
                <option value="cup">Cup</option>
                <option value="ft3">Cubic Feet</option>
                <option value="gal">Gallons</option>
              </select>
            </td>
            <td>
              {(question1b === "K" ||
                question1b === "C" ||
                question1b === "F" ||
                question1b === "R") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion1c(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question1b === "l" ||
                question1b === "Tbs" ||
                question1b === "in3" ||
                question1b === "cup" ||
                question1b === "ft3" ||
                question1b === "gal") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion1c(e.target.value)}
                >
                  <option value="l">Liter</option>
                  <option value="Tbs">Tablespoons</option>
                  <option value="in3">Cubic Inches</option>
                  <option value="cup">Cup</option>
                  <option value="ft3">Cubic Feet</option>
                  <option value="gal">Gallons</option>
                </select>
              )}
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion1d(Math.round(e.target.value * 10) / 10)}
              />
            </td>
            <td>
            {question1d !== "" && <h4 style={{ color: 'black' }}>{result1}</h4>}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion2a(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion2b(e.target.value)}
              >
                <option value=""></option>
                <option value="K">Kelvin</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="R">Rankine</option>
                <option value="l">Liter</option>
                <option value="Tbs">Tablespoons</option>
                <option value="in3">Cubic Inches</option>
                <option value="cup">Cup</option>
                <option value="ft3">Cubic Feet</option>
                <option value="gal">Gallons</option>
              </select>
            </td>
            <td>
              {(question2b === "K" ||
                question2b === "C" ||
                question2b === "F" ||
                question2b === "R") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion2c(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question2b === "l" ||
                question2b === "Tbs" ||
                question2b === "in3" ||
                question2b === "cup" ||
                question2b === "ft3" ||
                question2b === "gal") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion2c(e.target.value)}
                >
                  <option value="l">Liter</option>
                  <option value="Tbs">Tablespoons</option>
                  <option value="in3">Cubic Inches</option>
                  <option value="cup">Cup</option>
                  <option value="ft3">Cubic Feet</option>
                  <option value="gal">Gallons</option>
                </select>
              )}
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion2d(e.target.value)}
              />
            </td>
            <td>
            {question2d !== "" && <h4>{result2}</h4>}
            </td>
          </tr>
          <tr>
            <td style={{ color: 'black' }}>3</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion3a(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion3b(e.target.value)}
              >
                <option value=""></option>
                <option value="K">Kelvin</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="R">Rankine</option>
                <option value="l">Liter</option>
                <option value="Tbs">Tablespoons</option>
                <option value="in3">Cubic Inches</option>
                <option value="cup">Cup</option>
                <option value="ft3">Cubic Feet</option>
                <option value="gal">Gallons</option>
              </select>
            </td>
            <td>
              {(question3b === "K" ||
                question3b === "C" ||
                question3b === "F" ||
                question3b === "R") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion3c(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question3b === "l" ||
                question3b === "Tbs" ||
                question3b === "in3" ||
                question3b === "cup" ||
                question3b === "ft3" ||
                question3b === "gal") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion3c(e.target.value)}
                >
                  <option value="l">Liter</option>
                  <option value="Tbs">Tablespoons</option>
                  <option value="in3">Cubic Inches</option>
                  <option value="cup">Cup</option>
                  <option value="ft3">Cubic Feet</option>
                  <option value="gal">Gallons</option>
                </select>
              )}
            </td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion3d(e.target.value)}
              ></input>
            </td>
            <td>
            {question3d !== "" && <h4 style={{ color: 'black' }}>{result3}</h4>}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion4a(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion4b(e.target.value)}
              >
                <option value=""></option>
                <option value="K">Kelvin</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="R">Rankine</option>
                <option value="l">Liter</option>
                <option value="Tbs">Tablespoons</option>
                <option value="in3">Cubic Inches</option>
                <option value="cup">Cup</option>
                <option value="ft3">Cubic Feet</option>
                <option value="gal">Gallons</option>
              </select>
            </td>
            <td>
              {(question4b === "K" ||
                question4b === "C" ||
                question4b === "F" ||
                question4b === "R") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion4c(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question4b === "l" ||
                question4b === "Tbs" ||
                question4b === "in3" ||
                question4b === "cup" ||
                question4b === "ft3" ||
                question4b === "gal") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion4c(e.target.value)}
                >
                  <option value="l">Liter</option>
                  <option value="Tbs">Tablespoons</option>
                  <option value="in3">Cubic Inches</option>
                  <option value="cup">Cup</option>
                  <option value="ft3">Cubic Feet</option>
                  <option value="gal">Gallons</option>
                </select>
              )}
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion4d(e.target.value)}
              ></input>
            </td>
            <td>
            {question4d !== "" && <h4 style={{ color: 'black' }}>{result4}</h4>}
            </td>
          </tr>
          <tr>
            <td style={{ color: 'black' }}>5</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion5a(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion5b(e.target.value)}
              >
                <option value=""></option>
                <option value="K">Kelvin</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="R">Rankine</option>
                <option value="l">Liter</option>
                <option value="Tbs">Tablespoons</option>
                <option value="in3">Cubic Inches</option>
                <option value="cup">Cup</option>
                <option value="ft3">Cubic Feet</option>
                <option value="gal">Gallons</option>
              </select>
            </td>
            <td>
              {(question5b === "K" ||
                question5b === "C" ||
                question5b === "F" ||
                question5b === "R") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion5c(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question5b === "l" ||
                question5b === "Tbs" ||
                question5b === "in3" ||
                question5b === "cup" ||
                question5b === "ft3" ||
                question5b === "gal") && (
                <select
                  list="unitOfMeasurement"
                  type="list"
                  onChange={(e) => setQuestion5c(e.target.value)}
                >
                  <option value="l">Liter</option>
                  <option value="Tbs">Tablespoons</option>
                  <option value="in3">Cubic Inches</option>
                  <option value="cup">Cup</option>
                  <option value="ft3">Cubic Feet</option>
                  <option value="gal">Gallons</option>
                </select>
              )}
            </td>
            <td>
              <input
                type="textarea"
                onChange={(e) => setQuestion5d(e.target.value)}
              ></input>
            </td>
            <td>
            {question5d !== "" && <h4 style={{ color: 'black' }}>{result5}</h4>}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button size="lg">Submit Test</Button>
    </Container>
  );
}

export default Test;
