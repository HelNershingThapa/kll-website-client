import { Fragment } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8889rem",
      lineHeight: 1,
    },
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    fontSize: "24px",
    color: theme.palette.grey[600],
  },
}));

const Tags = () => {
  const classes = useStyles();
  const router = useRouter();

  console.log("router", window.location.href);
  return (
    <Fragment>
      <Typography variant="body1" className={classes.title}>
        Loved it? Share Now!
      </Typography>
      <div className={classes.socialIcons}>
        <a
          href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
        >
          <i className={clsx("ri-facebook-circle-fill", classes.socialIcon)} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet/?url=${window.location.href}`}
        >
          <i className={clsx("ri-twitter-fill", classes.socialIcon)} />
        </a>
        <a
          href={`https://linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
        >
          <i className={clsx("ri-linkedin-box-fill", classes.socialIcon)} />
        </a>
        <i className={clsx("ri-link", classes.socialIcon)} />
      </div>
    </Fragment>
  );
};

export default Tags;
