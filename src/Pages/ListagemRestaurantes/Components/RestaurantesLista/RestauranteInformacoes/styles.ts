import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    minWidth: 300,
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 65,
    height: 65,
  },
  nameWrapper: {
    marginLeft: theme.spacing(1),
    maxWidth: 200,
  },
  name: {
    fontWeight: 'bold',
  },
}));
export default useStyles;
