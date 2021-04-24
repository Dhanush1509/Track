import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AuthContext from "../context/Auth/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import Button from "@material-ui/core/Button";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const useStyles2 = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});
export default function MenuAppBar() {
  const classes = useStyles();
   const classes2 = useStyles2();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 const { userInfo } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <LinkContainer to="/" style={{ cursor: "pointer" }}>
              <Typography
                variant="h5"
                className={classes.title}
              
              >
                TechnoKids
              </Typography>
            </LinkContainer>
            {userInfo && userInfo.length > 0 ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={classes2.root}>
                <LinkContainer to="/login">
                  <Button> LOGIN </Button>
                </LinkContainer>

                <LinkContainer to="/register">
                  <Button> REGISTER </Button>
                </LinkContainer>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
