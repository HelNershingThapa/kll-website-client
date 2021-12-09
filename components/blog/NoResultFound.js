import { Fragment } from "react";
import clsx from "clsx";
import Image from 'next/image';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  noResultsFoundCtr: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "14vh",
    marginBottom: "25vh"
  },
  iconFill: {
    position: "relative",
    height: 80,
    width: 80,
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
  },
  description: {
    color: theme.palette.grey[600],
    maxWidth: 522,
    marginBottom: theme.spacing(8),
  },
  btnRoot: {
    padding: "10px 34px",
  },
  btnIcon: {
    fontSize: "16px",
    lineHeight: "16px",
  },
  btnStartIcon: {
    marginLeft: 0,
    marginRight: theme.spacing(1)
  },
  btnLabel: {
    color: theme.palette.grey[700],
    fontSize: "0.7778rem",
    lineHeight: "1.428",
  }
}));

const NoResultFound = ({ setCategory, setSearchQuery, loadFunc }) => {
  const classes = useStyles();

  return (
    <div className={classes.noResultsFoundCtr}>
      <div className={classes.iconFill}>
        <Image src="/icons/no-results-found.png" layout="fill" objectFit="contain" />
      </div>
      <Typography variant="h6" className={classes.title}>No Results Found</Typography>
      <Typography variant="body1" className={classes.description}>{`Sorry! We couldn’t find any search results for your query. Please check your spelling or try back again at a later time.`}</Typography>
      <Button variant="outlined" classes={{ root: classes.btnRoot, startIcon: classes.btnStartIcon, label: classes.btnLabel }} startIcon={<i className={clsx("ri-eye-2-line", classes.btnIcon)} />} onClick={() => { setCategory('none'); setSearchQuery('') }}>Check-Out Our Latest Post</Button>
    </div>
  );
};

export default NoResultFound;
