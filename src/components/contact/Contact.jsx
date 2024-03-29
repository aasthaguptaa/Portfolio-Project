import { useState } from "react";
import { Email, GitHub, LinkedIn, PermPhoneMsg } from "@material-ui/icons";
import "./Contact.scss";
import * as emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailBody, setEmailBody] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const { t } = useTranslation();
  const SERVICE_ID = "service_dwx3s98";
  const TEMPLATE_ID = "template_gg78p4l";
  const USER_ID = "8nN0k8JSB7q53ElpR";

  const handleSubmit = (e) => {
    e.preventDefault();

    var data = {
      from_name: emailSubject,
      message: emailBody,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
      },
      function (err) {
        console.log(err);
      }
    );

    setMessage(true);
    setEmailBody("");
    setEmailSubject("");
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>{t("contactInformation")}</h2>

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
          <h5>{t("leaveMeMessage")}</h5>
          <input
            type="text"
            placeholder={t("enterYourEmail")}
            value={emailSubject}
            onChange={(event) => setEmailSubject(event.target.value)}
          />
          <textarea
            placeholder={t("message")}
            value={emailBody}
            onChange={(event) => {
              setEmailBody(event.target.value);
              {
                event.target.value.trim().length
                  ? setIsDisabled(false)
                  : setIsDisabled(true);
              }
            }}
          ></textarea>
          <button
            type="submit"
            disabled={isDisabled}
            className={isDisabled ? "disable" : "button"}
          >
            {t("send")}
          </button>
          {message && <span>{t("thanks")} :)</span>}
        </form>
      </div>

      <div className="right">
        <div className="shape">
          <PermPhoneMsg className="phoneIcon" />
        </div>
      </div>
    </div>
  );
}
