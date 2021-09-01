import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Avatar } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    width: "100vw",
    position: "relative",
    left: "calc(-50vw + 50%)",
    marginTop: theme.spacing(20),
    background: "#F0F5F9",
    paddingBottom: "80px",
  },
  testimonialsCtr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quote: {
    fontSize: "40px",
    fontWeight: 300,
    lineHeight: "60px",
    color: "#304254",
  },
  author: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(10),
    alignItems: "center",
  },
  authorDetails: {
    display: "flex",
    flexDirection: "column",
  },
  authorName: {
    fontWeight: 500,
    color: "#304254",
    lineHeight: "1rem",
    marginBottom: theme.spacing(1),
  },
  authorTitle: {
    fontWeight: 400,
    color: "#445668",
  },
  hearFromPeopleTitle: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: "#1C2A3A",
  },
  hearFromPeopleDescription: {
    marginTop: theme.spacing(4),
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    color: "#304254",
  },
  arrowNavigation: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(7.5),
    marginTop: theme.spacing(10),
  },
}));

function Testimonials() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.testimonials}>
        <Container maxWidth="lg">
          <div className={classes.testimonialsCtr}>
            <div style={{ width: "361px", marginTop: "auto" }}>
              <Typography variant="h5" className={classes.hearFromPeopleTitle}>
                Hear from people at Kathmandu Living Labs
              </Typography>
              <Typography
                variant="body1"
                className={classes.hearFromPeopleDescription}
              >
                Listen to what the people at Kathmandu Living Labs have to say
                about us.
              </Typography>
              <div className={classes.arrowNavigation}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "inherit",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowLeft.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#185ADB",
                    borderRadius: "50%",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <Image
                    src="/icons/ArrowRight.svg"
                    height={16}
                    width={16}
                    alt="remix arrow right"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                width: "740px",
                position: "relative",
                marginTop: "130px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-32px",
                  left: "-35px",
                }}
              >
                <Image
                  src="/icons/quote.svg"
                  width={29.7}
                  height={22.8}
                  alt="quote icon"
                />
              </div>
              <Typography className={classes.quote}>
                Ever since I first joined here, I’ve made countless friends and
                worked on impactful projects that I’m proud of.
              </Typography>
              <div className={classes.author}>
                <Avatar>
                  <Image src="/author.png" layout="fill" alt="DP" />
                </Avatar>
                <div className={classes.authorDetails}>
                  <Typography
                    variant="subtitle1"
                    className={classes.authorName}
                  >
                    {" "}
                    Aishworya Shrestha
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.authorTitle}
                  >
                    {" "}
                    Research Assistant
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonials;
