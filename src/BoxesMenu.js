import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AppsIcon from '@material-ui/icons/Apps';
import BusinessIcon from '@material-ui/icons/Business';
import PollIcon from '@material-ui/icons/Poll';
import PublicIcon from '@material-ui/icons/Public';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import TimelineIcon from '@material-ui/icons/Timeline';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class BoxesMenu extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          color="inherit"
        >
          <AppsIcon />
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><BusinessIcon /></ListItemIcon>
                      <ListItemText primary="LOS" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><SpeakerNotesIcon /></ListItemIcon>
                      <ListItemText primary="Servicing" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><TimelineIcon /></ListItemIcon>
                      <ListItemText primary="Analytics" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><PermDataSettingIcon /></ListItemIcon>
                      <ListItemText primary="Digital" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><PollIcon /></ListItemIcon>
                      <ListItemText primary="Direct" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon><PublicIcon /></ListItemIcon>
                      <ListItemText primary="Exchange" />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

BoxesMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoxesMenu);