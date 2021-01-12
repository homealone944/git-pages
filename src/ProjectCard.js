import { React, useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, CardMedia } from "@material-ui/core"
import { Avatar, Typography, IconButton } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

function ProjectCard(props) {
    const { section, item, handleOpenFn, ...other } = props;

    const useStyles = makeStyles((theme) => ({
        root:{
            maxWidth: 150,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: '#FF0000',
        },
    }));
    const classes = useStyles()
    const theme = useTheme();
    
    return(
        <Card className={classes.root}>
            <CardHeader
            avatar={
                <Avatar>Tmp</Avatar>
            }
            title={item.Title}
            subheader={item.Dates}
            />
            <CardMedia className={classes.media}/>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{item.Desc}</Typography>
            </CardContent>
            <CardActions>
            <IconButton>
                <InfoIcon onClick={() => handleOpenFn(section, item)}/>
            </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;