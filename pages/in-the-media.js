import { uid } from "react-uid";
import clsx from "clsx";
import Image from "next/image";
import NavBar from "components/NavBar";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Container,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import CoverageCard from "components/in-the-media/CoverageCard";

const useStyles = makeStyles((theme) => ({
  pageCtr: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(40),
  },
  pageTitle: {
    width: "358px",
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "40px",
    color: "#0D1829",
    marginBottom: theme.spacing(8),
  },
  headerCoveragesCtr: {
    display: "flex",
    gap: theme.spacing(8),
    alignItems: "center",
  },
  headerImgCtr: {
    position: "relative",
  },
  headerImgOverlay: {
    position: "absolute",
    background: "rgba(13, 24, 41, 0.6)",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    padding: theme.spacing(8),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerCoverageTitle: {
    width: "90%",
    fontFamily: "Manrope",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "48px",
    color: "#0D1829",
  },
  headerCoverageDescription: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "32px",
    color: "#1C2A3A",
  },
  iconButton: {
    background: "#3E64FF !important", //overriding default transparent background color
    height: 60,
    width: 60,
  },
  controls: {
    display: "flex",
    gap: "52px",
    alignItems: "center",
  },
  blob: {
    width: "137px",
    height: "137px",
    background: "blue",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-68.5px",
    left: "-68.5px",
    zIndex: -1,
  },
  featuredInCtr: {
    marginTop: theme.spacing(20),
  },
  featureInTitle: {
    fontFamily: "Manrope",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#304254",
  },
  feautredInLogos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(20),
  },
  moreCoveragesCtr: {
    background: "#F0F5F9",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
  },
  moreCoveragesTitle: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#1C2A3A",
    marginBottom: theme.spacing(5),
  },
  coversGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "40px",
    columnGap: "13px",
  },
}));

function InTheMedia() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidht="lg" className={classes.pageCtr}>
        <Typography variant="h5" className={classes.pageTitle}>
          Kathmandu Living Labs in the media
        </Typography>
        <div className={classes.headerCoveragesCtr}>
          <div className={classes.headerImgCtr}>
            <div
              style={{ position: "relative", width: "750px", height: "560px" }}
            >
              <Image
                src="/in-the-media-header.png"
                layout="fill"
                style={{ objectFit: "cover" }}
                alt="KLL in media"
              />
            </div>
            <div className={classes.blob} />
            <div className={classes.headerImgOverlay}>
              <div>
                <Image src="/guardian-logo-white.png" width={116} height={48} />
              </div>
              <div className={classes.controls}>
                <Image
                  src="/icons/ArrowLeftWhite.svg"
                  height={16}
                  width={16}
                  alt="right arrow icon"
                />
                <IconButton
                  aria-label="delete"
                  disabled
                  color="primary"
                  className={classes.iconButton}
                >
                  <Image
                    src="/icons/ArrowRight.svg"
                    height={16}
                    width={16}
                    alt="right arrow icon"
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h5" className={classes.headerCoverageTitle}>
              The Guardian covers KLL’s post-earthquake works Team
            </Typography>
            <Typography
              variant="h5"
              className={classes.headerCoverageDescription}
            >
              The British Newspaper giant, The Guardian, covers Kathmandu Living
              Lab's key role in the days following the massive earthquake in the
              April of last year. The article highlights KLL's instrumental role
              in mobilizing thousands of online volunteers in creating rapid
              digital and paper maps of earthquake affected areas immediately
              after the earthquake
            </Typography>
            <Button variant="outlined">Read the Coverage</Button>
          </div>
        </div>

        <div className={classes.featuredInCtr}>
          <Typography
            align="center"
            variant="body1"
            className={classes.featureInTitle}
          >
            We have been featured in
          </Typography>
          <div className={classes.feautredInLogos}>
            {["", "", "", ""].map((logo) => (
              <Image
                src="/guardian-black.png"
                width={182}
                height={60}
                alt="Guardian logo"
              />
            ))}
          </div>
        </div>
      </Container>
      <div className={classes.moreCoveragesCtr}>
        <Container maxWidth="lg">
          <Typography variant="h6" className={classes.moreCoveragesTitle}>
            More Coverages
          </Typography>
          <div className={classes.coversGrid}>
            {["", "", "", "", ""].map((cover) => (
              <CoverageCard key={uid(cover)} />
            ))}
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
              marginTop: "44px",
            }}
          >
            <CircularProgress color="secondary" style={{ color: "#61758A" }} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default InTheMedia;
