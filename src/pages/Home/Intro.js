import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Intro(props) {
  const style = useStyles();
  const paragraphs = [
    `Welcome to my website! My name is Elisabeth Clumpkens and here you
        will find various projects of mine. I've been messing around with 
        programming since late 2018 and am excited to continue improving my 
        fluency as a developer.`,
    `From 2021 I graduated from the university of Richmond with a certificate
        in Web Developement after having graduated from VCU with a B.S. Political 
        Science. Programming has always felt like the better fit.`,
    `I'm currently working on refactoring my portfolio and past projects, utilizing
        the variosu technologies I've become more proficient with over the last year. Those,
        and any additional projects, can be accessed via here and my GitHub. Feel free 
        to utilize the contact links below if you'd like to reach out. Thanks!`,
  ];

  return (
    <div id="#intro">
      <Grid item xs={12} className={style.container}>
        <Typography ref={props.ref} className={style.title}>
          hello!
        </Typography>
        {paragraphs.map((par) => (
          <Typography className={style.body} variant="body1">
            {par}
          </Typography>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "justify",
    margin: "0 auto",
  },
  title: theme.typography.title,
  body: {
    ...theme.typography.body,
    padding: theme.spacing(1),
  },
}));
