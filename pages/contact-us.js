import Head from 'next/head'
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(30),
  },
  hearFromUs: {
    maxWidth: "500px",
  },
  title: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: "32px",
    color: "#0D1829",
  },
  subTitle: {
    marginTop: theme.spacing(2),
    color: "#445668",
  },
  textFieldLabel: {
    fontWeight: 500,
    lineHeight: "14px",
    color: "#000",
  },
  form: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(10),
  },
  textfieldRoot: {
    width: "500px",
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
    marginTop: theme.spacing(10),
  },
  contactInfo: {
    marginTop: theme.spacing(8),
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
}));

const textFields = [
  {
    label: "Your Full Name*",
  },
  {
    label: "Your Email Address*",
  },
  {
    label: "Company",
  },
  {
    label: "Message",
    rows: 4,
  },
];

export default function Home() {
  const classes = useStyles();
  return (
    <div>
    <Head>
      <title>Contact Us | Kathmandu Living Labs</title>
    </Head>
      <Container maxWidth="lg">
        <div className={classes.mainContainer}>
          <div className={classes.hearFromUs}>
            <Typography className={classes.title} variant="h4">
              Let us hear from you
            </Typography>
            <Typography className={classes.subTitle} variant="body1">
              We like to hear from you. Simply fill in the form below to reach
              out.
            </Typography>
            <div className={classes.form}>
              {textFields.map((textField) => (
                <div key={uid(textField)} className={classes.textFields}>
                  <Typography
                    className={classes.textFieldLabel}
                    variant="subtitle2"
                  >
                    {textField.label}
                  </Typography>
                  <TextField
                    classes={{
                      root: classes.textfieldRoot,
                      notchedOutline: classes.notchedOutline,
                    }}
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
            >
              Send Message
            </Button>
          </div>
          <div className={classes.mapInfo}>
            <Image src='/Rectangle7.png' width={740} height={500} />
            <div className={classes.contactInfo}>
              <div className={classes.location}>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 700,
                    fontFamily: "Manrope",
                    lineHeight: "1rem",
                    color: "#1C2A3A",
                  }}
                >
                  Our Office
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "1.33rem",
                    fontSize: "0.89rem",
                    width: "260px",
                    marginTop: "8px",
                    color: "#445668",
                  }}
                >
                  1474 Lamtangin Marg, Chundevi Kathmandu, Nepal
                </Typography>
              </div>

              <div className={classes.phone}>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 700,
                    fontFamily: "Manrope",
                    lineHeight: "1rem",
                    color: "#1C2A3A",
                  }}
                >
                  Contact Numbers
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "1.33rem",
                    fontSize: "0.89rem",
                    width: "260px",
                    marginTop: "8px",
                    color: "#445668",
                  }}
                >
                  +977 01472 0136
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 400,
                    lineHeight: "1.33rem",
                    fontSize: "0.89rem",
                    width: "260px",
                    color: "#445668",
                  }}
                >
                  +977 01472 0137
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
