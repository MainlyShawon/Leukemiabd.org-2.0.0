import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

export default function Hero() {
  const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
         আসুন ক্যান্সারকে পরাজিত করি
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        আমাদের এ লড়াইয়ে পাশে থাকুন 
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                href="#"
                variant="contained"
                color="primary"
              >
              যাকাত ফান্ড
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="#"
                variant="outlined"
                color="primary"
              >
                ডোনেট করুন
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
