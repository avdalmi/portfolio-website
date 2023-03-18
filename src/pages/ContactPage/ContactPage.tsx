import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionBox } from "../../GlobalStyles";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        //@ts-ignore
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <SectionBox>
      <form
        //  @ts-ignore
        ref={form}
        onSubmit={sendEmail}
        action="?"
        method="POST"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="from_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <div
          className="g-recaptcha"
          data-sitekey="6LfL0hAlAAAAALlQ_u9fjqVEp7a2USmNpHgzjM-z"
        ></div>
        <br />
        <input type="submit" value="Send" />
      </form>
    </SectionBox>
  );
};

export default ContactPage;
