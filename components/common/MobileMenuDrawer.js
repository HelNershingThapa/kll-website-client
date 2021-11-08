import clsx from "clsx";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    fontWeight: 200,
    lineHeight: 1.25,
    color: theme.palette.grey[600],
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
        <IconButton
          className={classes.menuButton}
          onClick={onClose}
          aria-label="Open Navigation"
        >
          <i className={clsx("ri-menu-line", classes.menuIcon)}></i>
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Website Menu
        </Typography>
        <div className={classes.menuItemContainerMobile}>
          {menuItems.map((menuItem) => (
            <>
              {menuItem.isSubMenuAvailable ? (
                <div className={classes.subMenuCtr}>
                  <Typography variant="h6" className={classes.menuItem}>
                    {menuItem.name}
                  </Typography>
                  {menuItem.subMenu.map((subMenu) => (
                    <div key={uid(subMenu)}>
                      <Link
                        key={uid(menuItem)}
                        href={menuItem.link}
                        className={classes.link}
                      >
                        <Typography
                          variant="body1"
                          className={classes.subMenuItemTypo}
                        >
                          {subMenu.name}
                        </Typography>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <Link
                  key={uid(menuItem)}
                  href={menuItem.link}
                  className={classes.link}
                >
                  <Typography variant="h6" className={classes.menuItem}>
                    {menuItem.name}
                  </Typography>
                </Link>
              )}
            </>
          ))}
        </div>
      </Container>
    </Drawer>
  );
};

export default MobileMenuDrawer;
