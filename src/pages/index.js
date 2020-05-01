import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LOGO from "../images/LOGO.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";

export default function Album(props) {
  const theme = useTheme();

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "50%",
    },
    cardContent: {
      flexGrow: 1,
    },

    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography noWrap className={classes.toolbarTitle}>
            <img src={LOGO} style={{ width: "50px" }}></img>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="primary"
              href="#"
              className={classes.link}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              variant="button"
              color="primary"
              href="#"
              className={classes.link}
            >
              ক্যান্সার সম্পর্কে জানুন
            </Link>
            <Link
              variant="button"
              color="primary"
              href="#"
              className={classes.link}
            >
              অনুপ্রেরণার গল্প
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            যোগাযোগ
          </Button>
          <Button variant="contained" color="primary">
            ডোনেট করুন
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/*  */}
        <Hero />
        {/*  */}
      </main>
      {/*  */}

      <Footer />
    </>
  );
}

