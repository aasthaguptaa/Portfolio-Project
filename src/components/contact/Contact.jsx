import { useState } from "react";
import { Email, GitHub, LinkedIn, PermPhoneMsg } from "@material-ui/icons";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact Information</h2>

        <div className="itemContainer">
          <a
            href="mailto:aasthaguptaa18@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email className="icon tooltip" />
          </a>
          <a
            href="https://www.linkedin.com/in/astha-gupta-275b56171/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
          <a
            href="https://github.com/aasthaguptaa"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="icon" />
          </a>
        </div>

        <hr className="hrstyle" />
        <form onSubmit={handleSubmit}>
          <h5>Leave me a message!</h5>
          <input type="text" placeholder="Enter your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>

      <div className="right">
        <div className="shape">
          {/* <img src="assets/AsthaFinal2.png" alt="" /> */}
          <PermPhoneMsg className="phoneIcon"/>;
        </div>
      </div>
    </div>
  );
}
