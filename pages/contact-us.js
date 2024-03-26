import { useState } from "react";
import Head from "next/head";
import { uid } from "react-uid";
import axios from "axios";
// import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { PinnedLocation } from "../components/contact-us/Map";

const textFields = [
  {
    label: "Your Full Name*",
    identifier: "fullName",
  },
  {
    label: "Your Email Address*",
    identifier: "email",
  },
  {
    label: "Company",
    identifier: "company",
  },
  {
    label: "Message",
    identifier: "message",
    rows: 4,
  },
];

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "34% 52%",
    justifyContent: "space-between",
    marginTop: theme.spacing(25),

    marginBottom: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "100%",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
    },
  },
  hearFromUs: {
    // width: "100%",
  },
  title: {
    lineHeight: 1.25,
  },
  subTitle: {
    marginTop: theme.spacing(2),
    color: "#445668",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
    },
  },
  textFieldLabel: {
    fontWeight: 500,
    lineHeight: 1,
  },
  form: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(8),
      gap: theme.spacing(8),
    },
  },
  textfieldRoot: {
    width: "100%",
    marginTop: theme.spacing(2),
    background: "#F8FAFC",
    // border: "1px solid #CAD5E0",
    // borderRadius: "4px",
  },
  button: {
    marginTop: theme.spacing(10),
    padding: "12px 24px",
  },
  buttonLabel: {
    fontSize: "0.89rem",
    lineHeight: "0.89rem",
  },
  mapInfo: {
    // width: "100%",
    marginTop: theme.spacing(10),
  },
  contactInfo: {
    marginTop: theme.spacing(8),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      gridTemplateColumns: "1fr",
      gap: theme.spacing(5),
    },
  },
  mapImgFill: {
    position: "relative",
    width: "100%",
    height: 500,
    mixBlendMode: "luminosity",
    [theme.breakpoints.down("xs")]: {
      height: "80vw",
    },
  },
  contactInfoTitle: {
    fontFamily: "Manrope",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.grey[800],
  },
  contactInfoDesc: {
    maxWidth: "260px",
    marginTop: "8px",
    color: theme.palette.grey[600],
  },
  successMessageCtr: {
    padding: "0.5rem",
    border: `3px solid ${theme.palette.primary.main}`,
    marginTop: "4rem",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const [inputValues, setInputValues] = useState({});

  const handleInputChange = ({ target: { name, value } }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const validateEmail = () => {
    let isValid = true;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(inputValues.email)) {
      isValid = false;
      setError("Please enter valid email address.");
    }
    return isValid;
  };

  const handleSubmit = () => {
    const { API_URL } = process.env;
    setError();
    validateEmail();
    const { fullName, email, company, message } = inputValues;
    axios
      .post(`${API_URL}/messages`, { fullName, email, company, message })
      .then((response) => setResponse(response))
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Kathmandu Living Labs</title>
      </Head>
      <Container fixed>
        <div className={classes.mainContainer}>
          <div>
            <Typography variant="h4" className={classes.title}>
              {`We’d love to hear from you`}
            </Typography>
            <Typography className={classes.subTitle} variant="body1">
              {`To contact us, simply fill in the form below.`}
            </Typography>
            {response?.status !== 200 && (
              <div className={classes.hearFromUs}>
                <div className={classes.form}>
                  {textFields.map((textField) => (
                    <div key={uid(textField)} className={classes.textFields}>
                      <Typography
                        variant="subtitle2"
                        className={classes.textFieldLabel}
                      >
                        {textField.label}
                      </Typography>
                      <TextField
                        classes={{
                          root: classes.textfieldRoot,
                          notchedOutline: classes.notchedOutline,
                        }}
                        name={textField.identifier}
                        variant="outlined"
                        multiline={textField.rows}
                        rows={textField.rows}
                        inputProps={{
                          style: {
                            height: "40px",
                            padding: 0,
                            paddingLeft: "0.5rem",
                          },
                        }}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  className={classes.button}
                  classes={{ label: classes.buttonLabel }}
                  fullWidth
                  disableElevation
                  variant="contained"
                  color="primary"
                  style={{ textTransform: "none" }}
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
                {error && (
                  <Typography
                    variant="subtitle2"
                    align="center"
                    style={{ marginTop: "0.5rem", color: "#E24C56" }}
                  >{`Invalid input. Fill in the form with valid inputs and submit your message again.`}</Typography>
                )}
              </div>
            )}
            {response?.status === 200 && (
              <div
                className={classes.successMessageCtr}
              >{`Thanks for getting in touch with us. We'll get back to you shortly.`}</div>
            )}
          </div>
          <div className={classes.mapInfo}>
            {/* <div className={classes.mapImgFill}> */}
            {/* <Image
                src="/Rectangle7.png"
                layout="fill"
                objectFit="cover"
                sizes="720px"
                alt=""
              /> */}
            <PinnedLocation />
            {/* </div> */}
            <div className={classes.contactInfo}>
              <div className={classes.location}>
                <Typography
                  variant="body1"
                  className={classes.contactInfoTitle}
                >
                  Our Office
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.contactInfoDesc}
                >
                  1474 Lamtangin Marg, Chundevi Kathmandu, Nepal
                </Typography>
              </div>

              <div className={classes.phone}>
                <Typography
                  variant="body1"
                  className={classes.contactInfoTitle}
                >
                  Contact
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.contactInfoDesc}
                >
                  +977-1-4720136
                </Typography>
                <Typography variant="subtitle1">
                  contact@kathmandulivinglabs.org
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
