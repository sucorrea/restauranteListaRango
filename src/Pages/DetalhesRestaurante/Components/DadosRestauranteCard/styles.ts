import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    padding: theme.spacing(2),
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    color: theme.palette.text.secondary,
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    width: 695,
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 125,
    height: 125,
    padding: theme.spacing(0.5),
    borderRadius: 8,
  },
  nameWrapper: {
    marginLeft: theme.spacing(1),
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 1,
  },
  address: {
    fontSize: 18,
  },
  funcionamento: {
    fontSize: 12,
  },
}));
export default useStyles;
