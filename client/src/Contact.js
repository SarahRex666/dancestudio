import React, { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import FormContainer from "./FormContainer";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g01zzfu",
        "template_wdy9k07",
        form.current,
        "qCaanlFloz3Ds3l6v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormContainer>
      <Form.Group className="mt-5 mb-5 pt-5 pb-5">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" />
          <br></br>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" />
          <br></br>
          <label>Message</label>
          <Form.Control as="textarea" rows={4} name="message" />
          <br></br>
          <Button
            variant="outline-secondary"
            type="submit"
            id="submit"
            value="Submit"
          >
            Submit
          </Button>
        </Form>
      </Form.Group>
    </FormContainer>
  );
}
export default Contact;
