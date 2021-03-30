import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        
    },
    inline: {
        display: 'inline',
    },
}));

export default function GitHubUser() {
    const userName = 'AlexandraMol';
    const [repos, setRepos] = useState([]);

    const classes = useStyles();

    useEffect( () => {
        fetch('https://api.github.com/users/' + userName + '/repos?sort=created')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, [userName]);

    
        
    const listItems = repos.map((repo) =>
        <Fragment>


            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
                   
                </ListItemAvatar>
                <ListItemText
                    
                    primary={repo.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                                
                            >
  
                            
                             <p>{repo.language}<a href={repo.html_url} target='__blank'>
                                <br></br>See project
                            </a></p> 
                            
                           
                            
                            
                            </Typography>
                           
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>
    );

    return (
        <div>
            
            <List className={classes.root}>
                <p>Username: {userName}</p>
                {listItems}</List>
        </div>
    );
}