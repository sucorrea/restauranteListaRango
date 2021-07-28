import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    fontFamily: 'Montserrat, sans-serif',
    width: '100%',
    padding: theme.spacing(9),
    margiTop: theme.spacing(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  presquisa: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    boxShadow: '-7px 11px 5px -5px rgba(0,0,0,0.28)',
    width: '40%',
  },
  iconButton: {
    padding: 10,
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
  },
}));
export default useStyles;
