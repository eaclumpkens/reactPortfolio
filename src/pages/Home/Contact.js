import React from 'react';
import { Grid, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

export default function Contact(props) {
    const style = useStyles()
    
    return (
        <Grid item xs={12} className={style.container}>
            <Typography ref={props.ref} className={style.title}>contact me</Typography>
            <Grid container fixed>
                <Grid xs={3} className={style.icon}>
                    <GitHub/>
                </Grid>
                <Grid xs={3} className={style.icon}>
                    <LinkedIn/>
                </Grid>
                <Grid xs={3} className={style.icon}>
                    <Email/>
                </Grid>
                <Grid xs={3} className={style.icon}>
                    <Phone/>
                </Grid>
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
    icon: { 
        width: '5rem'
    }
}));