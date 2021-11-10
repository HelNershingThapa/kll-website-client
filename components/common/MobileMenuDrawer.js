import clsx from "clsx";
import Image from "next/image";
import { uid } from "react-uid";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Container,
  Toolbar,
  List,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  navBar: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgFill: {
    cursor: "pointer",
    position: "relative",
    height: 48,
    width: 48,
    [theme.breakpoints.down("xs")]: {
      height: 40,
      width: 40,
    },
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    fontWeight: 200,
    lineHeight: 1.25,
    color: theme.palette.grey[600],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },

  noDecoration: {
    textDecoration: "none",
  },
  menuItemContainerMobile: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    padding: "10px",
    background: theme.palette.grey[100],
    borderRadius: "12px",
  },
  menuIcon: {
    fontSize: "20px",
    color: theme.palette.grey[600],
  },
  menuItem: {
    fontWeight: 600,
    lineHeight: 1.6,
  },
  menuItemLink: {
    fontWeight: 600,
    lineHeight: 1.6,
    "&:hover": {
      cursor: "pointer",
    },
  },
  subMenuCtr: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  subMenuItemTypo: {
    fontFamily: "Manrope",
    fontWeight: 500,
    color: theme.palette.grey[500],
    margin: theme.spacing(0, 8),
    "&:hover": {
      cursor: "pointer",
    },
  },
  arrowRight: {
    fontSize: "18px",
    color: theme.palette.grey[500],
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const MobileMenuDrawer = ({ open, onClose, menuItems }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="right"
      classes={{ paper: classes.paper }}
    >
      <Container fixed>
        <div className={classes.navBar}>
          <Link href="/" passHref>
            <div className={classes.imgFill} onClick={onClose}>
              <Image
                src="/kll-logos/kll-logo-default.svg"
                layout="fill"
                objectFit="cover"
                alt="KLL Logo"
              />  
            </div>
          </Link>
          <IconButton
            className={classes.menuButton}
            onClick={onClose}
            aria-label="Open Navigation"
          >
            <i className={clsx("ri-close-line", classes.menuIcon)}></i>
          </IconButton>
        </div>
        <Typography variant="h4" className={classes.title}>
          Website Menu
        </Typography>
        <div className={classes.menuItemContainerMobile}>
          {menuItems.map((menuItem) => (
            <Fragment key={uid(menuItem)}>
              {menuItem.isSubMenuAvailable ? (
                <div className={classes.subMenuCtr}>
                  <Typography variant="h6" className={classes.menuItem}>
                    {menuItem.name}
                  </Typography>
                  {menuItem.subMenu.map((subMenu) => (
                    <div key={uid(subMenu)}>
                      <Link
                        href={subMenu.link}
                        className={classes.link}
                        passHref
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="body1"
                            className={classes.subMenuItemTypo}
                            onClick={onClose}
                          >
                            {subMenu.name}
                          </Typography>
                          <i
                            className={clsx(
                              "ri-arrow-right-line",
                              classes.arrowRight
                            )}
                            onClick={onClose}
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  key={uid(menuItem)}
                  href={menuItem.link}
                  className={classes.link}
                  passHref
                >
                  <Typography
                    variant="h6"
                    className={classes.menuItemLink}
                    onClick={onClose}
                  >
                    {menuItem.name}
                  </Typography>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </Drawer>
  );
};

export default MobileMenuDrawer;
