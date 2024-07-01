import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [steps, setSteps] = useState(1);
  const [hide, setHide] = useState(true);
  const [content, setContent] = useState(true);

  function reduceSteps() {
    if (steps > 1) setSteps((steps) => steps - 1);
  }
  function increaseSteps() {
    if (steps < 3) setSteps((steps) => steps + 1);
  }

  function changeHide() {
    setHide(!hide);
    setContent(!content);
  }
  return (
    <div>
      {hide ? (
        <div className="container">
          <div className="numbers">
            <div className="active">1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="para">
            <p>
              Step {steps} : {messages[steps - 1]}
            </p>
          </div>
          <div className="buttons">
            <button onClick={reduceSteps} className="btn">
              Previous
            </button>
            <button onClick={increaseSteps} className="btn">
              Next
            </button>
          </div>
        </div>
      ) : null}
      <button onClick={changeHide} className={content ? "reset" : "revert"}>
        {content ? "Close" : "Open"}
      </button>
    </div>
  );
}
export default App;
