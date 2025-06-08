import React from "react";
import styled from "styled-components";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { formspreeUrl } from "../config";
import { postData } from "../utils";

const StyledForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-lg);

  .form-group {
    margin-bottom: var(--spacing-lg);
  }

  .form-label {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--color-gray-300);
    margin-bottom: var(--spacing-sm);
  }

  .form-control {
    background: var(--color-gray-800);
    border: 2px solid var(--color-gray-700);
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    font-size: var(--text-base);
    color: var(--color-gray-100);
    transition: var(--transition-base);

    &:focus {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    &::placeholder {
      color: var(--color-gray-500);
    }
  }

  textarea.form-control {
    min-height: 150px;
    resize: vertical;
  }

  .submit-button {
    font-family: var(--font-display);
    font-weight: 600;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-md);
    border: 2px solid var(--color-primary);
    background: var(--color-primary);
    color: white;
    transition: var(--transition-base);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);

    &:hover:not(:disabled) {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .spinner-border {
      width: 1rem;
      height: 1rem;
      border-width: 2px;
    }
  }

  .alert {
    border: none;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    margin-top: var(--spacing-lg);

    &.alert-success {
      background: rgba(16, 185, 129, 0.1);
      color: #059669;
    }

    &.alert-danger {
      background: rgba(239, 68, 68, 0.1);
      color: #dc2626;
    }

    .alert-heading {
      font-family: var(--font-display);
      font-weight: 600;
      margin-bottom: 0;
    }

    .btn-close {
      opacity: 0.5;
      transition: var(--transition-base);

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ContactForm = () => {
  const [isValidated, setIsValidated] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [danger, setDanger] = React.useState(false);
  const [dangerMessage, setDangerMessage] = React.useState(null);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setSuccess(false);
    setDanger(false);
    setDangerMessage(null);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsValidated(true);
    const { name, email, message } = form.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      setIsProcessing(true);
      try {
        const response = await postData(formspreeUrl, data);
        if (!response.ok) {
          throw new Error(`${response.status}: check formspreeUrl in data.js`);
        }
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setSuccess(true);
      } catch (error) {
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setDangerMessage(error.message);
        setDanger(true);
      }
    }
  };

  return (
    <StyledForm>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group className="form-group" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Your name" />
          <Form.Control.Feedback type="invalid">
            Name must be at least one character.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="someone@something.com"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" placeholder="Your message..." />
          <Form.Control.Feedback type="invalid">
            Please provide a valid message.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="text-center">
          {formspreeUrl && (
            <Button
              size="lg"
              type="submit"
              disabled={isProcessing}
              className="submit-button"
            >
              {isProcessing ? (
                <>
                  Sending
                  <Spinner animation="border" />
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          )}
          <Alert
            show={success}
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            <Alert.Heading>Success! I will contact you soon.</Alert.Heading>
          </Alert>
          <Alert
            show={danger}
            variant="danger"
            onClose={() => setDanger(false)}
            dismissible
          >
            <Alert.Heading>{dangerMessage}</Alert.Heading>
          </Alert>
          <Alert show={!formspreeUrl} variant="danger">
            <Alert.Heading>
              You must provide a valid formspree url in src/config.js
            </Alert.Heading>
          </Alert>
        </Form.Group>
      </Form>
    </StyledForm>
  );
};

export default ContactForm;
