import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export default function Contact(props) {
  const style = useStyles();
  return (
    <Grid item xs={12} className={style.container}>
      <Typography ref={props.ref} className={style.title}>
        <div id="#contact">contact me</div>
      </Typography>
      <Grid container className={style.iconContainer}>
        <Grid xs={1} className={style.icon}>
          <Link href="https://github.com/eaclumpkens" target="_blank">
            <GitHub fontSize="large" />
          </Link>
        </Grid>
        <Grid xs={1} className={style.icon}>
          <Link href="https://www.linkedin.com/in/eaclumpkens/" target="_blank">
            <LinkedIn fontSize="large" />
          </Link>
        </Grid>
        <Grid xs={1} className={style.icon}>
          <Link href="mailto:eaclumpkens@gmail.com" target="_blank">
            <Email fontSize="large" />
          </Link>
        </Grid>
        <Grid xs={1} className={style.icon}>
          <Link href="tel:+15713779356">
            <Phone fontSize="large"/>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "justify",
    margin: "0 auto",
  },
  title: {
    ...theme.typography.title,
    marginTop: "5rem !important",
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem !important'
    }
  },
  iconContainer: {
    justifyContent: "center",
  },
  icon: {
    margin: "0.5rem 2rem",
    transform: "scale(1.8)",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
        margin: "0.5rem 1.5rem",
    }
  },
}));
