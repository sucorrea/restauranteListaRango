import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(9),
    marginLeft: theme.spacing(9),
  },

}));
export default useStyles;
