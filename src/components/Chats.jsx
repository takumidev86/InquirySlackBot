import React from 'react'
import { makeStyles,createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Chat} from "./index"


const useStyles = makeStyles(() => (
    createStyles({
        "chats":{
            height: 400,
            padding: '0',
            overflow: 'auto'
        }
    })

));



const Chats = (props) => {
    const classes = useStyles();
    return(
        <List className={classes.chats} id={"scroll-area"}>
            {props.chats.map((chat,index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
                })}
                </List>
    )

}

export default Chats