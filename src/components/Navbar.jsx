import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

import { Search, Mail, Notifications } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: { display: "block" },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },
  input: { color: "white", marginLeft: theme.spacing(1) },
  icons: { display: "flex", alignItems: "center" },
  badge: { marginRight: theme.spacing(2) },
  //   avatar: { width: "30px", height: "30px", display: "cover" },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          kara scape
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          kara
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="avatar"
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className={classes.avatar}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
