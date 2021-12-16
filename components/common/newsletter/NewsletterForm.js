import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { decode } from "html-entities";
import { FilledInput, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newsletterInput: {
    background: theme.palette.grey[800],
    color: "white",
    maxWidth: 380,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
    },
  },
  placeholder: {
    padding: "15px 16px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1,
      color: theme.palette.grey[300],
    },
  },
  adornedEnd: {
    paddingRight: theme.spacing(5),
  },
}));

const NewsletterForm = ({ status, message, onValidated }) => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <FilledInput
        classes={{
          root: classes.newsletterInput,
          input: classes.placeholder,
          adornedEnd: classes.adornedEnd,
        }}
        id="filled-basic"
        placeholder="Enter your email"
        variant="filled"
        onKeyUp={(event) => handleInputKeyEvent(event)}
        onChange={(event) => setEmail(event?.target?.value ?? "")}
        endAdornment={
          <i
            className="ri-send-plane-line"
            style={{ color: "#CAD5E0", fontSize: "24px", lineHeight: "24px" }}
            onClick={handleFormSubmit}
          />
        }
      />
      <div className="newsletter-form-info">
        {status === "sending" && (
          <Typography
            variant="subtitle2"
            style={{ color: "white", maxWidth: "360px" }}
          >
            Sending...
          </Typography>
        )}
        {status === "error" || error ? (
          <Typography
            variant="subtitle2"
            className="newsletter-form-error"
            style={{ color: "#DB1F2C", maxWidth: "360px" }}
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <Typography
            variant="subtitle2"
            style={{ color: "#1F8130", maxWidth: "360px" }}
            dangerouslySetInnerHTML={{ __html: decode(message) }}
          />
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
