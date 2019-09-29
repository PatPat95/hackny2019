import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CropFreeIcon from '@material-ui/icons/CropFree';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="My Cards" icon={<AccountBalanceWalletIcon />} />
      <BottomNavigationAction label="Collected Cards" icon={<RecentActorsIcon />} />
      <BottomNavigationAction label="Scan"icon={<CropFreeIcon />} />
    </BottomNavigation>
  );
}