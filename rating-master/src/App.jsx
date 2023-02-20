import { useState } from "react";
import Thankyou from "./ThankYou/Thankyou";
import "./app.css";
import logo from "./images/icon-star.svg";
function App() {
  const [selected, setSelected] = useState(0);
  const [isSubmitted, setSubmit] = useState(false);
  return (
    <div className="App">
      {isSubmitted ? (
        <Thankyou selected={selected} />
      ) : (
        <div className="wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul>
            <li
              className={selected == 1 ? "selected" : ""}
              onClick={() => setSelected(1)}
            >
              1
            </li>
            <li
              className={selected == 2 ? "selected" : ""}
              onClick={() => setSelected(2)}
            >
              2
            </li>
            <li
              className={selected == 3 ? "selected" : ""}
              onClick={() => setSelected(3)}
            >
              3
            </li>
            <li
              className={selected == 4 ? "selected" : ""}
              onClick={() => setSelected(4)}
            >
              4
            </li>
            <li
              className={selected == 5 ? "selected" : ""}
              onClick={() => setSelected(5)}
            >
              5
            </li>
          </ul>
          <button onClick={() => setSubmit(true)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
