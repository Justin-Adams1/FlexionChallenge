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
  const [question1InitialValueToConvert, setQuestion1InitialValueToConvert] = useState("0");
  const [question1InitialUnit, setQuestion1InitialUnit] = useState("F");
  const [question1DesiredUnit, setQuestion1DesiredUnit] = useState("R");
  const [question1StudentResponse, setQuestion1StudentResponse] = useState("");
  const [question1CalculatedAnswer, setAnswer1] = useState(1);
  const [question1Status, setQuestion1Status] = useState();
  const [question1RoundedStudentResponse, setQuestion1RoundedStudentResponse] = useState();

  const [question2InitialValueToConvert, setQuestion2InitialValueToConvert] = useState("0");
  const [question2InitialUnit, setQuestion2InitialUnit] = useState("F");
  const [question2DesiredUnit, setQuestion2DesiredUnit] = useState("R");
  const [question2StudentResponse, setQuestion2StudentResponse] = useState("");
  const [question2CalculatedAnswer, setQuestion2CalculatedAnswer] = useState(1);
  const [question2Status, setQuestion2Status] = useState();
  const [question2RoundedStudentResponse, setQuestion2RoundedStudentResponse] = useState();

  const [question3InitialValueToConvert, setQuestion3InitialValueToConvert] = useState("0");
  const [question3InitialUnit, setQuestion3InitialUnit] = useState("F");
  const [question3DesiredUnit, setQuestion3DesiredUnit] = useState("R");
  const [question3StudentResponse, setQuestion3StudentResponse] = useState("");
  const [question3CalculatedAnswer, setQuestion3CalculatedAnswer] = useState(1);
  const [question3Status, setQuestion3Status] = useState();
  const [question3RoundedStudentResponse, setQuestion3RoundedStudentResponse] = useState();

  const [question4InitialValueToConvert, setQuestion4InitialValueToConvert] = useState("0");
  const [question4InitialUnit, setQuestion4InitialUnit] = useState("F");
  const [question4DesiredUnit, setQuestion4DesiredUnit] = useState("R");
  const [question4StudentResponse, setQuestion4StudentResponse] = useState("");
  const [question4CalculatedAnswer, setQuestion4CalculatedAnswer] = useState(1);
  const [question4Status, setQuestion4Status] = useState();
  const [question4RoundedStudentResponse, setQuestion4RoundedStudentResponse] = useState();

  const [question5InitialValueToConvert, setQuestion5InitialValueToConvert] = useState("0");
  const [question5InitialUnit, setQuestion5InitialUnit] = useState("F");
  const [question5DesiredUnit, setQuestion5DesiredUnit] = useState("R");
  const [question5StudentResponse, setQuestion5StudentResponse] = useState("");
  const [question5CalculatedAnswer, setQuestion5CalculatedAnswer] = useState(1);
  const [question5Status, setQuestion5Status] = useState();
  const [question5RoundedStudentResponse, setQuestion5RoundedStudentResponse] = useState();

  // In the function ConvertProblems, I incorrectly used toFixed originally to 'round' the input
  // for the convert module to then work on. This is incorrect because it is not true rounding, but a
  // shaving off of the digits. In the examples I used to test the feature, it worked on a surface level
  // because the numbers I was using just happened to round down, so I didn't notice.

  const convertProblems = () => {
    try {
      setAnswer1(
        convert(Math.round(question1InitialValueToConvert * 10) / 10)
          .from(question1InitialUnit)
          .to(question1DesiredUnit)
          .toFixed(1)
      );
      setQuestion2CalculatedAnswer(
        convert(Math.round(question2InitialValueToConvert * 10) / 10)
          .from(question2InitialUnit)
          .to(question2DesiredUnit)
          .toFixed(1)
      );
      setQuestion3CalculatedAnswer(
        convert(Math.round(question3InitialValueToConvert * 10) / 10)
          .from(question3InitialUnit)
          .to(question3DesiredUnit)
          .toFixed(1)
      );
      setQuestion4CalculatedAnswer(
        convert(Math.round(question4InitialValueToConvert * 10) / 10)
          .from(question4InitialUnit)
          .to(question4DesiredUnit)
          .toFixed(1)
      );
      setQuestion5CalculatedAnswer(
        convert(Math.round(question5InitialValueToConvert * 10) / 10)
          .from(question5InitialUnit)
          .to(question5DesiredUnit)
          .toFixed(1)
      );

      setQuestion1RoundedStudentResponse((Math.round(question1StudentResponse * 10) / 10).toFixed(1));
      setQuestion2RoundedStudentResponse((Math.round(question2StudentResponse * 10) / 10).toFixed(1));
      setQuestion3RoundedStudentResponse((Math.round(question3StudentResponse * 10) / 10).toFixed(1));
      setQuestion4RoundedStudentResponse((Math.round(question4StudentResponse * 10) / 10).toFixed(1));
      setQuestion5RoundedStudentResponse((Math.round(question5StudentResponse * 10) / 10).toFixed(1));

      if (question1CalculatedAnswer === question1RoundedStudentResponse) {
        setQuestion1Status("Correct");
      } else setQuestion1Status("Incorrect");
      if (question2CalculatedAnswer === question2RoundedStudentResponse) {
        setQuestion2Status("Correct");
      } else setQuestion2Status("Incorrect");
      if (question3CalculatedAnswer === question3RoundedStudentResponse) {
        setQuestion3Status("Correct");
      } else setQuestion3Status("Incorrect");
      if (question4CalculatedAnswer === question4RoundedStudentResponse) {
        setQuestion4Status("Correct");
      } else setQuestion4Status("Incorrect");
      if (question5CalculatedAnswer === question5RoundedStudentResponse) {
        setQuestion5Status("Correct");
      } else setQuestion5Status("Incorrect");
    } catch (error) {}
  };

  // Using a useEffect here for unit conversions serves two purposes: To immediately give feedback
  // to see if a problem is correct, and to Refresh the DOM after information has been entered.

  useEffect(() => {
    convertProblems();
  });

  // Originally, using onChange across all input fields did not provide the required DOM updates
  // to ensure that each row was calculated properly into the conversion. I've corrected that by
  // adding event listeners for all the different ways a user can interact with data input on the form.

  return (
    <Container>
      <Table striped className="test">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>#</th>
            <th style={{ textAlign: "center" }}>Initial Value</th>
            <th style={{ textAlign: "center" }}>Input Unit of Measure</th>
            <th style={{ textAlign: "center" }}>Target Unit of Measure</th>
            <th style={{ textAlign: "center" }}>Student Response</th>
            <th style={{ textAlign: "center" }}>Grade?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "black" }}>1</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion1InitialValueToConvert(e.target.value)}
                onKeyDown={(e) => setQuestion1InitialValueToConvert(e.target.value)}
                onFocus={(e) => setQuestion1InitialValueToConvert(e.target.value)}
                onBlur={(e) => setQuestion1InitialValueToConvert(e.target.value)}
                onKeyUp={(e) => setQuestion1InitialValueToConvert(e.target.value)}
                onClick={(e) => setQuestion1InitialValueToConvert(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                type="list"
                onChange={(e) => setQuestion1InitialUnit(e.target.value)}
                onKeyDown={(e) => setQuestion1InitialUnit(e.target.value)}
                onFocus={(e) => setQuestion1InitialUnit(e.target.value)}
                onBlur={(e) => setQuestion1InitialUnit(e.target.value)}
                onKeyUp={(e) => setQuestion1InitialUnit(e.target.value)}
                onClick={(e) => setQuestion1InitialUnit(e.target.value)}
              >
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
              {(question1InitialUnit === "K" ||
                question1InitialUnit === "C" ||
                question1InitialUnit === "F" ||
                question1InitialUnit === "R") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion1DesiredUnit(e.target.value)}
                >
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question1InitialUnit === "l" ||
                question1InitialUnit === "Tbs" ||
                question1InitialUnit === "in3" ||
                question1InitialUnit === "cup" ||
                question1InitialUnit === "ft3" ||
                question1InitialUnit === "gal") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion1DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion1DesiredUnit(e.target.value)}
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
                onChange={(e) => setQuestion1StudentResponse(e.target.value)}
                onKeyDown={(e) => setQuestion1StudentResponse(e.target.value)}
                onFocus={(e) => setQuestion1StudentResponse(e.target.value)}
                onBlur={(e) => setQuestion1StudentResponse(e.target.value)}
                onKeyUp={(e) => setQuestion1StudentResponse(e.target.value)}
                onClick={(e) => setQuestion1StudentResponse(e.target.value)}
              />
            </td>
            <td>
              {question1StudentResponse !== "" && (
                <h4 style={{ color: "black" }}>{question1Status}</h4>
              )}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion2InitialValueToConvert(e.target.value)}
                onKeyDown={(e) => setQuestion2InitialValueToConvert(e.target.value)}
                onFocus={(e) => setQuestion2InitialValueToConvert(e.target.value)}
                onBlur={(e) => setQuestion2InitialValueToConvert(e.target.value)}
                onKeyUp={(e) => setQuestion2InitialValueToConvert(e.target.value)}
                onClick={(e) => setQuestion2InitialValueToConvert(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                type="list"
                onChange={(e) => setQuestion2InitialUnit(e.target.value)}
                onKeyDown={(e) => setQuestion2InitialUnit(e.target.value)}
                onFocus={(e) => setQuestion2InitialUnit(e.target.value)}
                onBlur={(e) => setQuestion2InitialUnit(e.target.value)}
                onKeyUp={(e) => setQuestion2InitialUnit(e.target.value)}
                onClick={(e) => setQuestion2InitialUnit(e.target.value)}
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
              {(question2InitialUnit === "K" ||
                question2InitialUnit === "C" ||
                question2InitialUnit === "F" ||
                question2InitialUnit === "R") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion2DesiredUnit(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question2InitialUnit === "l" ||
                question2InitialUnit === "Tbs" ||
                question2InitialUnit === "in3" ||
                question2InitialUnit === "cup" ||
                question2InitialUnit === "ft3" ||
                question2InitialUnit === "gal") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion2DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion2DesiredUnit(e.target.value)}
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
                onChange={(e) => setQuestion2StudentResponse(e.target.value)}
                onKeyDown={(e) => setQuestion2StudentResponse(e.target.value)}
                onFocus={(e) => setQuestion2StudentResponse(e.target.value)}
                onBlur={(e) => setQuestion2StudentResponse(e.target.value)}
                onKeyUp={(e) => setQuestion2StudentResponse(e.target.value)}
                onClick={(e) => setQuestion2StudentResponse(e.target.value)}
              />
            </td>
            <td>{question2StudentResponse !== "" && <h4>{question2Status}</h4>}</td>
          </tr>
          <tr>
            <td style={{ color: "black" }}>3</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion3InitialValueToConvert(e.target.value)}
                onKeyDown={(e) => setQuestion3InitialValueToConvert(e.target.value)}
                onFocus={(e) => setQuestion3InitialValueToConvert(e.target.value)}
                onBlur={(e) => setQuestion3InitialValueToConvert(e.target.value)}
                onKeyUp={(e) => setQuestion3InitialValueToConvert(e.target.value)}
                onClick={(e) => setQuestion3InitialValueToConvert(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                list="unitOfMeasurement"
                type="list"
                onChange={(e) => setQuestion3InitialUnit(e.target.value)}
                onKeyDown={(e) => setQuestion3InitialUnit(e.target.value)}
                onFocus={(e) => setQuestion3InitialUnit(e.target.value)}
                onBlur={(e) => setQuestion3InitialUnit(e.target.value)}
                onKeyUp={(e) => setQuestion3InitialUnit(e.target.value)}
                onClick={(e) => setQuestion3InitialUnit(e.target.value)}
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
              {(question3InitialUnit === "K" ||
                question3InitialUnit === "C" ||
                question3InitialUnit === "F" ||
                question3InitialUnit === "R") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion3DesiredUnit(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question3InitialUnit === "l" ||
                question3InitialUnit === "Tbs" ||
                question3InitialUnit === "in3" ||
                question3InitialUnit === "cup" ||
                question3InitialUnit === "ft3" ||
                question3InitialUnit === "gal") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion3DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion3DesiredUnit(e.target.value)}
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
                onChange={(e) => setQuestion3StudentResponse(e.target.value)}
                onKeyDown={(e) => setQuestion3StudentResponse(e.target.value)}
                onFocus={(e) => setQuestion3StudentResponse(e.target.value)}
                onBlur={(e) => setQuestion3StudentResponse(e.target.value)}
                onKeyUp={(e) => setQuestion3StudentResponse(e.target.value)}
                onClick={(e) => setQuestion3StudentResponse(e.target.value)}
              ></input>
            </td>
            <td>
              {question3StudentResponse !== "" && (
                <h4 style={{ color: "black" }}>{question3Status}</h4>
              )}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion4InitialValueToConvert(e.target.value)}
                onKeyDown={(e) => setQuestion4InitialValueToConvert(e.target.value)}
                onFocus={(e) => setQuestion4InitialValueToConvert(e.target.value)}
                onBlur={(e) => setQuestion4InitialValueToConvert(e.target.value)}
                onKeyUp={(e) => setQuestion4InitialValueToConvert(e.target.value)}
                onClick={(e) => setQuestion4InitialValueToConvert(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                type="list"
                onChange={(e) => setQuestion4InitialUnit(e.target.value)}
                onKeyDown={(e) => setQuestion4InitialUnit(e.target.value)}
                onFocus={(e) => setQuestion4InitialUnit(e.target.value)}
                onBlur={(e) => setQuestion4InitialUnit(e.target.value)}
                onKeyUp={(e) => setQuestion4InitialUnit(e.target.value)}
                onClick={(e) => setQuestion4InitialUnit(e.target.value)}
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
              {(question4InitialUnit === "K" ||
                question4InitialUnit === "C" ||
                question4InitialUnit === "F" ||
                question4InitialUnit === "R") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion4DesiredUnit(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question4InitialUnit === "l" ||
                question4InitialUnit === "Tbs" ||
                question4InitialUnit === "in3" ||
                question4InitialUnit === "cup" ||
                question4InitialUnit === "ft3" ||
                question4InitialUnit === "gal") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion4DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion4DesiredUnit(e.target.value)}
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
                onChange={(e) => setQuestion4StudentResponse(e.target.value)}
                onKeyDown={(e) => setQuestion4StudentResponse(e.target.value)}
                onFocus={(e) => setQuestion4StudentResponse(e.target.value)}
                onBlur={(e) => setQuestion4StudentResponse(e.target.value)}
                onKeyUp={(e) => setQuestion4StudentResponse(e.target.value)}
                onClick={(e) => setQuestion4StudentResponse(e.target.value)}
              ></input>
            </td>
            <td>
            <td>{question4StudentResponse !== "" && <h4>{question4Status}</h4>}</td>
            </td>
          </tr>
          <tr>
            <td style={{ color: "black" }}>5</td>
            <td>
              <input
                type="number"
                onChange={(e) => setQuestion5InitialValueToConvert(e.target.value)}
                onKeyDown={(e) => setQuestion5InitialValueToConvert(e.target.value)}
                onFocus={(e) => setQuestion5InitialValueToConvert(e.target.value)}
                onBlur={(e) => setQuestion5InitialValueToConvert(e.target.value)}
                onKeyUp={(e) => setQuestion5InitialValueToConvert(e.target.value)}
                onClick={(e) => setQuestion5InitialValueToConvert(e.target.value)}
              ></input>
            </td>
            <td>
              <select
                type="list"
                onChange={(e) => setQuestion5InitialUnit(e.target.value)}
                onKeyDown={(e) => setQuestion5InitialUnit(e.target.value)}
                onFocus={(e) => setQuestion5InitialUnit(e.target.value)}
                onBlur={(e) => setQuestion5InitialUnit(e.target.value)}
                onKeyUp={(e) => setQuestion5InitialUnit(e.target.value)}
                onClick={(e) => setQuestion5InitialUnit(e.target.value)}
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
              {(question5InitialUnit === "K" ||
                question5InitialUnit === "C" ||
                question5InitialUnit === "F" ||
                question5InitialUnit === "R") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion5DesiredUnit(e.target.value)}
                >
                  <option value=""></option>
                  <option value="K">Kelvin</option>
                  <option value="C">Celsius</option>
                  <option value="F">Fahrenheit</option>
                  <option value="R">Rankine</option>
                </select>
              )}
              {(question5InitialUnit === "l" ||
                question5InitialUnit === "Tbs" ||
                question5InitialUnit === "in3" ||
                question5InitialUnit === "cup" ||
                question5InitialUnit === "ft3" ||
                question5InitialUnit === "gal") && (
                <select
                  type="list"
                  onChange={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onKeyDown={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onFocus={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onBlur={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onKeyUp={(e) => setQuestion5DesiredUnit(e.target.value)}
                  onClick={(e) => setQuestion5DesiredUnit(e.target.value)}
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
                onChange={(e) => setQuestion5StudentResponse(e.target.value)}
                onKeyDown={(e) => setQuestion5StudentResponse(e.target.value)}
                onFocus={(e) => setQuestion5StudentResponse(e.target.value)}
                onBlur={(e) => setQuestion5StudentResponse(e.target.value)}
                onKeyUp={(e) => setQuestion5StudentResponse(e.target.value)}
                onClick={(e) => setQuestion5StudentResponse(e.target.value)}
              ></input>
            </td>
            <td>
              {question5StudentResponse !== "" && (
                <h4 style={{ color: "black" }}>{question5Status}</h4>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button size="lg">Submit Test</Button>
    </Container>
  );
}

export default Test;
