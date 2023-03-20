import { SectionBox } from "../../GlobalStyles";
import { FormInput, SubmitButton } from "./style";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef(null);

  const sendEmail = (event: React.SyntheticEvent) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        form.current ?? "",
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
    const resetForm = event.target as HTMLFormElement;
    resetForm.reset();
  };

  return (
    <SectionBox>
      <form
        ref={form}
        onSubmit={sendEmail}
        action="?"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1.7rem",
        }}
      >
        <FormInput type="text" name="from_name" required label="name" />

        <FormInput type="email" name="from_email" required label="email" />

        <FormInput multiline rows={5} name="message" required label="message" />

        <div
          className="g-recaptcha"
          data-sitekey="6LfL0hAlAAAAALlQ_u9fjqVEp7a2USmNpHgzjM-z"
        ></div>
        <br />
        <SubmitButton type="submit" value="Send">
          submit
        </SubmitButton>
      </form>
    </SectionBox>
  );
};

export default ContactPage;
