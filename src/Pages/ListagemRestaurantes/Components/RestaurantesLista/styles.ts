import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
}));
export default useStyles;
