import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    padding: theme.spacing(9),
    margiTop: theme.spacing(50),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
export default useStyles;
