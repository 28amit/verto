import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import useStyles from "./style"
import {Twitter,GitHub,LinkedIn,Facebook,Instagram} from "@material-ui/icons"
import { IconButton } from "@material-ui/core";
const Appbar = () => {
      const classes = useStyles();
    
return(
    <Box>
        <AppBar className={classes.AppBar}>
            <Box className={classes.Boxbg1}></Box>
            <Box className={classes.Boxbg2}> 
                <IconButton size="large">
                    <Twitter/>
                </IconButton>
                <IconButton size="large">
                    <GitHub/>
                </IconButton>
                <IconButton size="large">
                    <LinkedIn/>
                </IconButton>
                <IconButton size="large">
                    <Facebook/>
                </IconButton>
                <IconButton size="large">
                    <Instagram/>
                </IconButton>
            </Box>       
        </AppBar>
    </Box>  
);
};
export default Appbar;