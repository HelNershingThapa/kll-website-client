import Link from "next/link";
import { uid } from "react-uid";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  page: {
    // height: 160,
  },
  imgFill: {
    position: "relative",
    marginBottom: "8px",
    width: "100%",
    height: 160,
  },
  pageName: {
    fontFamily: "Manrope",
    fontWeight: 800,
    lineHeight: "28px",
    color: theme.palette.grey[800],
    marginBottom: theme.spacing(1),
  },
  pageDesc: {
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.grey[600],
  },
  insights: {
    display: "grid",
    width: 340,
    columnGap: "20px",
    rowGap: "24px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `"fw fw"
  "hw1 hw2"`,
  },
  getInvolved: {
    display: "grid",
    width: 305,
    rowGap: "24px",
    gridTemplateColumns: "1fr",
  },
  getInvolvedImgFill: {
    position: "relative",
    width: "100%",
    height: 160,
    marginBottom: "8px",
  },
}));

function PopoverContent({ identifier, menu }) {
  const { API_URL } = process.env;
  const classes = useStyles();

  return (
    <>
      {identifier === "whoweare" && (
        <div style={{ display: "flex", gap: "20px" }}>
          {menu
            .find((item) => item.identifier === "whoweare")
            .subMenu.map((page) => (
              <Link key={uid(page)} href={page.link} passHref>
                <div
                  className={classes.page}
                  key={uid(page)}
                  style={{ width: 160, cursor: "pointer" }}
                >
                  <div className={classes.imgFill}>
                    <Image
                      src={`${API_URL}${page.image.url}`}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <Typography variant="body1" className={classes.pageName}>
                    {page.name}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.pageDesc}>
                    {page.description}
                  </Typography>
                </div>
              </Link>
            ))}
        </div>
      )}
      {identifier === "insights" && (
        <div className={classes.insights}>
          {menu
            .find((item) => item.identifier === "insights")
            .subMenu.map((page, index) => (
              <Link key={uid(page, index)} href={page.link} passHref>
                <div
                  key={uid(page)}
                  style={{
                    gridArea: `${index === 0 ? "fw" : `hw${index}`}`,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      background: `${index === 0 ? "#185ADB" : "#E8EFFC"}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 160,
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: index === 0 ? 80 : 60,
                        width: index === 0 ? 80 : 60,
                      }}
                    >
                      <img
                        src={page.imageFile}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <Typography variant="body1" className={classes.pageName}>
                    {page.name}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.pageDesc}>
                    {page.description}
                  </Typography>
                </div>
              </Link>
            ))}
        </div>
      )}

      {identifier === "get-involved" && (
        <div className={classes.getInvolved}>
          {menu
            .find((item) => item.identifier === "get-involved")
            .subMenu.map((page, index) => (
              <Link key={uid(page, index)} href={page.link} passHref>
                <div style={{ cursor: "pointer" }}>
                  <div className={classes.getInvolvedImgFill}>
                    <Image
                      src={`${API_URL}${page.image.url}`}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <Typography variant="body1" className={classes.pageName}>
                    {page.name}
                  </Typography>
                  <Typography variant="subtitle2" className={classes.pageDesc}>
                    {page.description}
                  </Typography>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}

export default PopoverContent;
