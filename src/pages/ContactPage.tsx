import React from "react";
import { filter } from "rxjs";
import styled from "styled-components";
import { getCurrentState, Id, setState } from "../utils/bridge";
import { EventSubject, EventWrapper } from "../utils/EventWrapper";
import { WIDTH } from "../utils/utils";

EventSubject.pipe(
  filter(([event, id]) => event === "click" && id === "submit-question")
).subscribe(([, ,]) => {
  const { subject, message, email, firstName, lastName } = getCurrentState();
  const formData = new FormData();
  formData.append("from", email);
  formData.append("to", "test@test.test");
  formData.append(
    "subject",
    `${firstName}, ${lastName}, ${subject}, ${message}`
  );
  formData.append("text", message);
  fetch(
    "https://api.mailgun.net/v3/sandboxe0dbf7b2c75449399dace78f2b035bd8.mailgun.org/messages",
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic YXBpOmtleS0wMDdiZjEwMTg1N2NiODBiNDMwOWU2Y2UyM2JiODAxMA==",
      },
      body: formData,
    }
  );
  setState({ hasSubmitted: true });
});

EventSubject.pipe(
  filter(
    ([event, id]) =>
      event === "change" &&
      [
        Id.EmailInput,
        Id.FirstNameInput,
        Id.LastNameInput,
        Id.SubjectInput,
        Id.MessageInput,
      ].includes(id as Id)
  )
).subscribe(([, id, value]) => {
  setState({ [id]: value });
});

const Input = styled(
  ({
    className,
    label,
    name,
    tag = "input",
    ...rest
  }: React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    tag?: "input" | "textarea";
  }) => {
    const Tag = tag as unknown as React.FC<
      React.InputHTMLAttributes<HTMLInputElement>
    >;
    return (
      <div className={`${className} input`}>
        <label htmlFor={name}>{label}</label>
        <Tag name={name} {...rest}></Tag>
      </div>
    );
  }
)`
  display: flex;
  flex-direction: column;
  margin: 8px;
  box-sizing: border-box;
  flex-grow: 1;

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    display: flex;
    padding: 8px;
    font-size: 16px;
    flex-grow: 1;
  }

  textarea {
    min-height: 256px;
    resize: none;
  }
`;

const Button = styled(
  ({
    className,
    children,
    name,
    ...rest
  }: React.ButtonHTMLAttributes<unknown> & {
    name: string;
  }) => {
    return (
      <button className={`${className} input`} {...rest}>
        {children}
      </button>
    );
  }
)`
  display: flex;
  background: #1976d2;
  border: none;
  height: 40px;
  width: 256px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 8px;
  color: white;
  cursor: pointer;
  :hover:enabled {
    box-shadow: #aaa 0 0 8px;
    background: #1976d2ee;
  }
  :hover:disabled {
    cursor: no-drop;
  }
  @media (max-width: ${WIDTH}px) {
    width: unset;
  }
  &:disabled {
    background: grey;
  }
`;

export const ContactPage = styled(
  ({
    className,
    hasSubmitted,
    state: { firstName, lastName, subject, email, message },
  }: React.InputHTMLAttributes<unknown> & {
    hasSubmitted: boolean;
    state: {
      firstName: string;
      lastName: string;
      subject: string;
      email: string;
      message: string;
    };
  }) => (
    <>
      <section className={`${className} container`}>
        <h1>Contact</h1>
        <h2>Let's Stay in Touch</h2>
        <br />
        {!hasSubmitted && (
          <>
            <p>
              Thanks for stopping by! Please, feel free to reach out to me
              regarding opportunities or should you have any questions. I'm
              looking forward to connecting and collaborating with creative
              people.
            </p>
            <br />
            <form>
              <div className="field-container">
                <EventWrapper id={Id.FirstNameInput}>
                  <Input
                    label="First Name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                  />
                </EventWrapper>
                <EventWrapper id={Id.LastNameInput}>
                  <Input
                    label="Last Name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                  />
                </EventWrapper>
              </div>
              <div className="field-container">
                <EventWrapper id={Id.EmailInput}>
                  <Input
                    label="Email Addres"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                  />
                </EventWrapper>
                <EventWrapper id={Id.SubjectInput}>
                  <Input
                    label="Subject"
                    name="subject"
                    type="text"
                    value={subject}
                  />
                </EventWrapper>
              </div>
              <div className="field-container">
                <EventWrapper id={Id.MessageInput}>
                  <Input
                    label="Body"
                    name="body"
                    tag="textarea"
                    type="text"
                    value={message}
                  ></Input>
                </EventWrapper>
              </div>
              <br />
              <div className="field-container">
                <EventWrapper id="submit-question">
                  <Button
                    name="submit"
                    role="button"
                    type="submit"
                    disabled={
                      !(lastName && firstName && email && subject && message)
                    }
                  >
                    Submit
                  </Button>
                </EventWrapper>
              </div>
            </form>
          </>
        )}
        {hasSubmitted && (
          <>
            <h3>Thanks for submitting!</h3>
          </>
        )}
      </section>
      <br />
      <br />
      <br />
    </>
  )
)`
  .field-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: ${WIDTH}px) {
      flex-direction: column;
    }
  }
`;
