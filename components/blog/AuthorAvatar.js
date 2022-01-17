import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  author: {
    display: "flex",
    gap: theme.spacing(3),
    marginTop: theme.spacing(5),
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  avatar: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[700],
  },
  guestAvatar: {
    fontSize: "20px",
    lineHeight: 1,
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
    lineHeight: 1,
    fontWeight: 400,
    color: "#445668",
  },
  authorBio: {
    lineHeight: 1.5,
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.428,
      marginBottom: theme.spacing(3),
    },
  },
}));

const AuthorAvatar = ({ member, guestAuthor, showAuthorBio = true }) => {
  const { API_URL } = process.env;
  const classes = useStyles();

  return (
    <>
      <div className={classes.author}>
        <AvatarGroup>
          {guestAuthor?.name && (
            <Avatar className={classes.avatar}>
              <i className={clsx("ri-user-star-fill", classes.guestAvatar)}></i>
            </Avatar>
          )}
          <Avatar className={classes.avatar}>
            <Image
              priority
              src={`${API_URL}${
                member.avatarImage ? member.avatarImage.url : member.image.url
              }`}
              layout="fill"
              objectFit="cover"
              sizes="40px"
              alt="DP"
            />
          </Avatar>
        </AvatarGroup>
        <div className={classes.authorDetails}>
          <Typography variant="body1" className={classes.authorName}>
            {guestAuthor?.name || member.name}
          </Typography>
          <Typography variant="subtitle2" className={classes.authorTitle}>
            {guestAuthor?.description || member.position}
          </Typography>
        </div>
      </div>
      {showAuthorBio && (
        <Typography variant="subtitle1" className={classes.authorBio}>
          {member.bio.split("\n\n")[0]}
        </Typography>
      )}
    </>
  );
};

export default AuthorAvatar;
