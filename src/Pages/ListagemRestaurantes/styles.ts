import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    padding: theme.spacing(9),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: theme.spacing(8),
  },
}));
export default useStyles;
