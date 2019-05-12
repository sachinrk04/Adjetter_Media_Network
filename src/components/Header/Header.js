import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.css';

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
               <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            <NavLink to="/">Home</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default (withStyles(styles)(Header));