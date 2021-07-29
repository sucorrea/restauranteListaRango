import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    textDecoration: 'none',
  },

  paper: {
    display: 'flex',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minWidth: 386,
  },

  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 85,
    height: 85,
  },

  nameWrapper: {
    marginLeft: theme.spacing(2.5),
    maxWidth: 200,
  },

  name: {
    fontWeight: 'bold',
  },

  preco: {
    fontWeight: 'bolder',
  },

}));
export default useStyles;
