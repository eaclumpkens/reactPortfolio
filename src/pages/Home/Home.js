import React from "react";
import DocumentMeta from "react-document-meta";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import Menu from "../../components/Menu/Menu";
import Intro from "./Intro";
import AboutMe from './AboutMe';
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  const style = useStyles();
  const meta = { title: "ec | hello" };

  return (
    <>
      <Grid container spacing={2} className={style.mainContainer}>
        <DocumentMeta {...meta} />
        <Grid item xs={12} className={{root: { position: "absolute" }}}>
          <Menu/>
        </Grid>

        <Intro/>
        <div className={style.divider}></div>

        <AboutMe/>
        <div className={style.divider}></div>

        <Portfolio/>
        <div className={style.divider}></div>

        <Contact/>
        <div className={style.divider}></div>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.light,
    display: "inline-block",
    justifyContent: "center",
    padding: "3rem 2.5rem",
  },
  divider: {
    height: "50rem",
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  },
}));