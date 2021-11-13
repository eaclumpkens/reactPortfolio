import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { GitHub, ExitToApp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Color from "color";

import { projects } from '../../utils/copy';

export default function Portfolio(props) {
  const style = useStyles();

  return (
    <Grid item xs={12} className={style.container}>
      <Typography ref={props.ref} className={style.title}>
        <div id="#portfolio">portfolio</div>
      </Typography>
      <Grid container spacing={1} className={style.cardWrapper}>
        {projects.map((proj, i) => (
          <Card key={i} className={style.cardContainer}>
            <CardMedia
              component="img"
              className={style.cardImage}
              image={proj.image}
              alt={`preview of ${proj.title}`}
            />
            <CardContent>
              <Grid container>
                {/* CARD TITLE*/}
                <Grid item xs={12} md={6}>
                  <Typography className={style.subtitle}>
                    {proj.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={style.actions}>
                  {/* CARD ACTIONS */}
                  <CardActions className={style.actions}>
                    {proj.repo ? (
                      <Button
                        target="_blank"
                        xs={{ marginRight: '-1rem' }}
                        href={proj.repo}
                        alt={`${proj.title} rep`}
                      >
                        <GitHub fontSize={'large'}/>
                      </Button>
                    ) : null}
                    {proj.demo ? (
                      <Button
                        target="_blank"
                        href={proj.demo}
                        alt={`${proj.title} demo`}
                      >
                        <ExitToApp fontSize={'large'}/>
                      </Button>
                    ) : null}
                  </CardActions>
                </Grid>
              </Grid>

              {/* CARD DESCRIPTION */}
              <Typography className={style.subbody}>
                {proj.description}
              </Typography>
              <Typography className={style.subinfo}>
                Technologies: {proj.tech}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "justify",
    background: Color(theme.palette.secondary.main).alpha(0.5).string(),
    borderRadius: "1%",
    padding: "0 1rem",
    [theme.breakpoints.down('sm')]: {
        borderRadius: '0.3% !important'
    }
  },
  title: {
    ...theme.typography.title,
    color: theme.palette.secondary.dark,
  },
  actions: {
    marginRight: '-1.3rem !important',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        marginTop: '-0.5rem',
        marginRight: '0rem !important',
        justifyContent: "center",
    }
  },
  cardWrapper: {
    margin: "1rem 1rem 3rem 1rem",
    justifyContent: "space-around",
  },
  cardContainer: {
    margin: "0.3rem",
    overflow: "scroll !important",
    maxWidth: 300,
    maxHeight: 350,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "45%",
      maxHeight: 200,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 400,
      maxHeight: 450,
    },
  },
  cardImage: {
    height: 180,
    [theme.breakpoints.down("sm")]: {
      height: 90,
    },
  },
  subtitle: {
    ...theme.typography.subtitle,
    overflowWrap: 'normal',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
      letterSpacing: "0.2rem !important",
    },
  },
  subbody: {
    ...theme.typography.subbody,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem !important",
    },
  },
  subinfo: {
    ...theme.typography.subinfo,
    marginTop: "0.5rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem !important",
    },
  },
}));
