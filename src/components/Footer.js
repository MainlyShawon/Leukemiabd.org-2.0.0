import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © 2016-Present. Leukemia and Lymphoma Society of Bangladesh.
        All rights reserved
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with ❤️ by "}
        <a color="inherit" href="https://mainly.technology">
          Mainly Technology
        </a>
      </Typography>
    </footer>
  );
}
