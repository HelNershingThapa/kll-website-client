import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.grey[100],
    padding: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(10, 4),
      width: "100vw",
      marginLeft: "-16px",
    },
  },
  imgFill: {
    position: "relative",
    height: 60,
    width: 60,
    mixBlendMode: "luminosity",
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 40,
    },
  },
  title: {
    fontFamily: "Manrope",
    lineHeight: "32px",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  description: {
    maxWidth: 566,
    marginBottom: theme.spacing(8),
  },
  textfieldLabel: {
    marginBottom: theme.spacing(2),
    fontWeight: 500,
    lineHeight: 1,
  },
  textField: {
    height: "40px",
    width: 500,
    background: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textFieldRoot: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#CAD5E0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CAD5E0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CAD5E0",
      },
      "&:hover fieldset": {
        borderColor: "#CAD5E0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CAD5E0",
      },
    },
  },
  input: {
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
  },
  button: {
    padding: "10px 20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  label: {
    fontSize: "14px",
    color: theme.palette.grey[50],
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "20px",
  },
}));

function StayUpdated() {
  const classes = useStyles();
  const { API_URL } = process.env;
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  const onSubmit = () => {
    setError();
    axios.post(`${API_URL}/event-subscribers`, { email }).then(response => setResponse(response)).catch(error => {
      setError(error);
    });
  }

  console.log("email", response);


  return (
    <div className={classes.container}>
      <div className={classes.imgFill}>
        <Image src="/icons/bell.svg" layout="fill" objectFit="cover" alt="" />
      </div>
      <Typography variant="h6" className={classes.title}>
        {`Stay up-to-date with our events`}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.description}
      >
        If you want to be notified about our upcoming events, please enter your contact details below.
      </Typography>
      <div className={classes.form}>
        <div>
          <Typography variant="subtitle2" className={classes.textfieldLabel}>
            Your Email Address
          </Typography>
          <TextField
            error={error}
            classes={{ root: classes.textFieldRoot }}
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.textField,
              },
            }}
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            helperText={error ? "Invalid entry." : response?.status === 200 && "Thank you for subscribing to our events. We'll send you an email when something is happening."}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        {/* <div>
          <Typography variant="subtitle2" className={classes.textfieldLabel}>
            Your Phone Number
          </Typography>
          <TextField
            classes={{ root: classes.textFieldRoot }}
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.textField,
              },
            }}
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
          />
        </div> */}
        <div>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button, label: classes.label }}
            onClick={() => onSubmit()}
          >
            Get Event Updates
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StayUpdated;
