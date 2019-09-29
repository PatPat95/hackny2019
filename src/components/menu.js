import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import { Redirect, Link } from 'react-router-dom'

// Auth.currentAuthenticatedUser({
//    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
// }).then(user => console.log(user))
// .catch(err => console.log(err));

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      {value ==='a' ? <Redirect to={"/user/"+props.userId} /> : null}
      {value ==='c' ? <Redirect to="/webcam" /> : null}
      <BottomNavigationAction label="My Cards" icon={<AccountBalanceWalletIcon />} value="a"/>
      <BottomNavigationAction label="Collected Cards" icon={<RecentActorsIcon />} value="b"/>
      <BottomNavigationAction label="Scan"icon={<CropFreeIcon />} value="c"/>
    </BottomNavigation>
    </div>
  );
}