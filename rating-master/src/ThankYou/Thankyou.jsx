import React from "react";
import "./main.css";
import th from "../images/illustration-thank-you.svg";
const Thankyou = ({ selected }) => {
  return (
    <div className="wrapper2">
      <img src={th} alt="ThankYouImg" />
      <p className="para">You selected {selected} out of 5</p>
      <h1>Thank you!</h1>
      <p className="para2">
        We appreciate you taking the time to give a rating. if you ever need
        more support, don't hesitate to get in touch.
      </p>
    </div>
  );
};

export default Thankyou;
