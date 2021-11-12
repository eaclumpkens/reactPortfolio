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
import { GitHub, ExitToApp } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

import Projects from "../../utils/Projects";

export default function Portfolio(props) {
  const style = useStyles();

  return (
    <Grid item xs={12} className={style.container}>
      <Typography ref={props.ref} className={style.title}>
        <div id="#portfolio">portfolio</div>
      </Typography>
      <Grid container spacing={1} className={style.container}>
        {Projects.map((proj) => (
          <Card className={style.cardContainer}>
            <CardMedia
              component="img"
              className={style.cardImage}
              image={proj.image}
              alt={`preview of ${proj.title}`}
            />
            <CardContent>
              <Typography className={style.subtitle}>{proj.title}</Typography>
              <Typography className={style.subbody}>
                {proj.description}
              </Typography>
              <Typography className={style.subinfo}>
                Technologies: {proj.tech}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={proj.repo} disabled={!proj.repo} className={style.button}>
                <GitHub fontSize='large'/>
              </Button>
              <Button href={proj.demo} disabled={!proj.demo} className={style.button}>
                <ExitToApp fontSize='large'/>
              </Button>
            </CardActions>
          </Card>
        ))}
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
    padding: theme.spacing(1),
  },
  cardContainer: {
    margin: "0.3rem",
    overflow: "scroll !important",
    maxWidth: 300,
    maxHeight: 350,
    [theme.breakpoints.down("sm")]: {
      maxWidth: '45%',
      maxHeight: 200
    },
    [theme.breakpoints.up("lg")]: {
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
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
        fontSize: '1rem !important',
        letterSpacing: '0.2rem !important'
    }
  },
  subbody: {
    ...theme.typography.subbody,
    [theme.breakpoints.down("sm")]: {
        fontSize: '0.7rem !important',
    }
  },
  subinfo: {
    ...theme.typography.subinfo,
    marginTop:'0.5rem !important',
    [theme.breakpoints.down("sm")]: {
        fontSize: '0.7rem !important',
    }
  },
  button: {
    width: '4rem'
  }
}));
