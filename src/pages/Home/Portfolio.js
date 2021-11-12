import React from "react";
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from "@mui/material";
import { makeStyles } from '@mui/styles'

import Projects from '../../utils/Projects';

export default function Portfolio(props) {
    const style = useStyles()

    return(
        <Grid item xs={12} className={style.container}>
            <Typography ref={props.ref} className={style.title}>portfolio</Typography>
              
             <Grid container spacing={1} className={style.container}>
                { Projects.map(proj => (
                    <Card 
                        sx={{ maxWidth: 300, maxHeight: 350 }} 
                        className={ style.cardContainer }
                    >
                        <CardMedia
                            component='img'
                            height= '180'
                            image={ proj.image }
                            alt={ `preview of ${proj.title}` }
                        />
                        <CardContent>
                            <Typography className={style.subtitle}>
                                { proj.title }
                            </Typography>
                            <Typography className={style.subbody}>
                                { proj.description }
                            </Typography>
                            <Typography className={style.subinfo}>
                                Technologies: { proj.tech }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button 
                                href={proj.repo}
                                disabled={!proj.repo}
                            > GitHub Repo </Button>
                            <Button 
                                href={proj.demo} 
                                disabled={!proj.demo}
                            > Demo </Button>
                        </CardActions>
                    </Card>
                )) }
            </Grid> 
        </Grid>
    )
};

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'justify',
        margin: '0 auto',
    },
    title: theme.typography.title,
    cardContainer: {
        margin: '0.3rem',
        overflow: 'scroll',
    },
    subtitle: {
        ...theme.typography.subtitle,
        marginBottom: theme.spacing(1)
    },
    subbody: {
        ...theme.typography.subbody,
    },
    subinfo: {
        ...theme.typography.subinfo
    }
  }));