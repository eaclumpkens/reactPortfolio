import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Divider, Avatar, SvgIcon } from "@mui/material";
import Color from "color";

import { aboutDev, favTech, facts } from "../../utils/copy";

export default function Aboutme() {
  const style = useStyles();

  return (
    <div id="#aboutme">
      <Grid container className={style.container} sx={{textAlign:'center !important'}}>

         {/*  CURRENT TECH */} 

        <Grid item xs={12} md={3}>
          <Typography className={style.title}>
            technologies I'm currently messing with
          </Typography>
          {favTech.map((tech, i) => (
            <SvgIcon
              alt={tech.name}
              variant="rounded"
              sx={{  
                margin: "1rem ",
                width: 50,
                height: 50,
              }}
            >
              {" "}
              <path d={tech.path} />{" "}
            </SvgIcon>
          ))}
          <Typography className={style.disclaimer}>
            (more info coming soon)
          </Typography>
        </Grid>

        <Divider
          orientation="vertical"
          sx={{  maxHeight: "90%", margin: "-3rem !important" }}
        />

        {/*  BRIEF HISTORY */}

        <Grid item xs={12} md={3} sx={{textAlign:'center !important'}}>
          <Typography className={style.title}>a brief history</Typography>
          {aboutDev.map((par, i) => (
            <Typography className={style.body}>{par}</Typography>
          ))}
        </Grid>

        <Divider
          orientation="vertical"
          sx={{ maxHeight: "90%", margin: "-3rem !important" }}
        />

        {/*  OTHER INTERESTS */}

        <Grid item xs={12} md={3} sx={{textAlign:'center'}}>
          <Typography className={style.title}>
            other interests of mine
          </Typography>
          <Grid container className={style.avatarContainer}>
            {facts.map((fact, i) => (
              <Grid item xs={4} className={style.avatarWrapper}>
                <Avatar
                  alt={fact.name}
                  src={fact.path}
                  variant="rounded"
                  className={style.avatar}
                  sx={{
                    margin: "0.3rem",
                    width: 100,
                    height: 100,
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography className={style.disclaimer}>
            (more info coming soon)
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inlined-flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "justify",
    background: Color(theme.palette.tertiary.main).alpha(0.3).string(),
    borderRadius: "1%",
    padding: "2rem 1rem",
    marginBottom: "15rem",
    flexWrap: "wrap !important",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0.3% !important",
      marginBottom: "5rem",
      justifyContent: 'start'
    },
  },
  title: {
    ...theme.typography.subtitle,
    marginBottom: '1rem !important',
    color: theme.palette.tertiary.dark,
    textAlign: "center",
    fontWeight: 200,
    [theme.breakpoints.down('sm')]: {
        marginTop: '2rem !important'
    }
  },
  body: {
    ...theme.typography.subbody,
    paddingBottom: theme.spacing(1),
  },
  avatar: {
    boxShadow: theme.shadows[3],
  },
  disclaimer: {
      color: theme.palette.tertiary.main,
      textAlign: 'center',
      marginTop: '1rem !important'
  }
}));
