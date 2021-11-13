import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Bio from "../../utils/bio";

export default function Intro(props) {
  const style = useStyles();
  return (
    <div id="#intro">
      <Grid item xs={12} className={style.container}>
        <Avatar
          src="./assets/bioPic.PNG"
          variant="rounded"
          size={style.avatar}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
          }}
        />
        <Typography ref={props.ref} className={style.title}>
          hello!
        </Typography>
        {Bio.map((p) => (
          <Typography className={style.body} variant="body1">
            {p}
          </Typography>
        ))}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "justify",
    marginBottom: "3rem !important",
  },
  title: {
    ...theme.typography.title,
    marginTop: '1rem !important'
  },
  body: {
    ...theme.typography.body,
    padding: theme.spacing(1),
  },
}));
