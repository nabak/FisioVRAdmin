import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    marginLeft: '1rem',
    marginTop: '1rem'
  }
}));
const NotificationsList = () => {
  const classes = useStyles();
  const [notifications] = useState([{
    title: 'Azure Git Repos',
    image: '/static/images/avatar/1.jpg',
    from: 'GEAR',
    content: ' — Conheça os novos repositórios GIT',
    link: 'https://devops.energisa.com.br'
  }]);
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleNotifications = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton color="inherit" onClick={toggleNotifications} aria-controls="notification-menu" aria-haspopup="true">
        <Badge
          badgeContent={notifications.length}
          color="secondary"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          className={classes.title}
        >
          Notificações
        </Typography>
        <List className={classes.root}>
          {
            notifications.map((notification) => (
              <ListItem button alignItems="flex-start" component={Link} to={notification.link}>
                <ListItemAvatar>
                  <Avatar alt={notification.title} src={notification.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={notification.title}
                  secondary={
                    (
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {notification.from}
                        </Typography>
                        {notification.content}
                      </>
                    )
                  }
                />
              </ListItem>
            ))
          }
        </List>
      </Menu>
    </div>
  );
};

export default NotificationsList;
