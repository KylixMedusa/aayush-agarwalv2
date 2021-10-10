import React, { memo, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Button from "../Button/Button";
import "./ContactForm.scss";
import connect from "../../context/connect";
import { addSnackbar } from "../../context/actions/snackbar";

interface Props {
  addSnackbar: (message: string) => void;
}

type IFocus = null | "focus" | "semi-focus";

type IFormData = {
  value: string;
  focus: IFocus;
};

const ContactForm: React.FC<Props> = ({ addSnackbar }) => {
  const [name, setName] = useState<IFormData>({
    value: "",
    focus: null,
  });
  const [email, setEmail] = useState<IFormData>({
    value: "",
    focus: null,
  });
  const [subject, setSubject] = useState<IFormData>({
    value: "",
    focus: null,
  });
  const [message, setMessage] = useState<IFormData>({
    value: "",
    focus: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const clickHandler = () => {
    if (formRef.current && !isSubmitting) {
      formRef.current.requestSubmit();
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(name, email, subject, message);
    setIsSubmitting(true);
    emailjs
      .send(
        "service_tkhrlpd",
        "template_u09lq7q",
        {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
        "user_xBO6nlmklf0p7t8gfMeVY"
      )
      .then(
        () => {
          addSnackbar("Message sent successfully");
        },
        () => {
          addSnackbar("Some error occurred");
        }
      )
      .catch(() => {
        addSnackbar("Some error occurred");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="contact" ref={formRef} onSubmit={submitHandler}>
      <div className="card--grid">
        <div className="input--div">
          <input
            onFocus={() => setName((prev) => ({ ...prev, focus: "focus" }))}
            onChange={(e) =>
              setName((prev) => ({
                value: e.target.value,
                focus: prev.focus === "focus" ? "focus" : "semi-focus",
              }))
            }
            onBlur={() =>
              setName((prev) => ({
                ...prev,
                focus: prev.value.length > 0 ? "semi-focus" : null,
              }))
            }
            value={name.value}
            className={name.focus || ""}
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input--div">
          <input
            onFocus={() => setEmail((prev) => ({ ...prev, focus: "focus" }))}
            onChange={(e) =>
              setEmail((prev) => ({
                ...prev,
                value: e.target.value,
                focus: prev.focus === "focus" ? "focus" : "semi-focus",
              }))
            }
            onBlur={() =>
              setEmail((prev) => ({
                ...prev,
                focus: prev.value.length > 0 ? "semi-focus" : null,
              }))
            }
            value={email.value}
            className={email.focus || ""}
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="input--div">
        <textarea
          onFocus={() => setSubject((prev) => ({ ...prev, focus: "focus" }))}
          onChange={(e) =>
            setSubject((prev) => ({
              ...prev,
              value: e.target.value,
              focus: prev.focus === "focus" ? "focus" : "semi-focus",
            }))
          }
          onBlur={() =>
            setSubject((prev) => ({
              ...prev,
              focus: prev.value.length > 0 ? "semi-focus" : null,
            }))
          }
          value={subject.value}
          className={subject.focus || ""}
          name="subject"
          id="subject"
        ></textarea>
        <label htmlFor="Subject">Subject</label>
      </div>
      <div className="input--div">
        <textarea
          onFocus={() => setMessage((prev) => ({ ...prev, focus: "focus" }))}
          onChange={(e) =>
            setMessage((prev) => ({
              ...prev,
              value: e.target.value,
              focus: prev.focus === "focus" ? "focus" : "semi-focus",
            }))
          }
          onBlur={() =>
            setMessage((prev) => ({
              ...prev,
              focus: prev.value.length > 0 ? "semi-focus" : null,
            }))
          }
          value={message.value}
          className={message.focus || ""}
          name="message"
          id="message"
        ></textarea>
        <label htmlFor="Your Message">Your Message</label>
      </div>
      <Button
        text={isSubmitting ? "Sending..." : "Send message!"}
        onClick={clickHandler}
      />
    </form>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addSnackbar: (message: string) => dispatch(addSnackbar(message)),
  };
};

const withConnect = (Component: React.FC<Props>) =>
  connect(mapStateToProps, mapDispatchToProps)(Component as any);

export default withConnect(memo(ContactForm));
