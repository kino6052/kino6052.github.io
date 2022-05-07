import React from "react";
import { filter } from "rxjs";
import styled from "styled-components";
import { setState } from "../utils/bridge";
import { EventSubject, EventWrapper } from "../utils/EventWrapper";
import { WIDTH } from "../utils/utils";

EventSubject.pipe(
  filter(([event, id]) => event === "click" && id === "submit-question")
).subscribe(([, ,]) => {
  setState({ hasSubmitted: true });
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
  :hover {
    box-shadow: #aaa 0 0 8px;
    background: #1976d2ee;
  }
  @media (max-width: ${WIDTH}px) {
    width: unset;
  }
`;

export const ContactPage = styled(
  ({
    className,
    hasSubmitted,
  }: React.InputHTMLAttributes<unknown> & { hasSubmitted: boolean }) => (
    <>
      <section className={`${className} container`}>
        <h1>Contact</h1>
        <h2>Let's Stay in Touch</h2>
        <br />
        {!hasSubmitted && (
          <>
            <p>
              Thanks for stopping by! Please,8 feel free to reach out to me
              regarding opportunities or should you have any questions. I'm
              looking forward to connecting and collaborating with creative
              people.
            </p>
            <br />
            <form>
              <div className="field-container">
                <Input
                  label="First Name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                />
                <Input
                  label="Last Name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                />
              </div>
              <div className="field-container">
                <Input
                  label="Email Addres"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <Input label="Subject" name="subject" type="text" />
              </div>
              <div className="field-container">
                <Input
                  label="Body"
                  name="body"
                  tag="textarea"
                  type="text"
                ></Input>
              </div>
              <br />
              <div className="field-container">
                <EventWrapper id="submit-question">
                  <Button name="submit" role="button" type="submit">
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
