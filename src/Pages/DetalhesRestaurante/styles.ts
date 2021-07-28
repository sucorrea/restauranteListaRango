import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
  },

  cardrestaurante: {
    display: 'flex',
  },
}));
export default useStyles;
