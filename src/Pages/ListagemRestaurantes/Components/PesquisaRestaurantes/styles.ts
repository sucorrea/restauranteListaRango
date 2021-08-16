import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    boxShadow: '-7px 11px 5px -5px rgba(0,0,0,0.28)',
    width: '40%',
    margin: theme.spacing(1),
  },
  iconButton: {
    padding: theme.spacing(1.5),
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
  },
}));
export default useStyles;
