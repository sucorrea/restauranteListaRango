import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '65%',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(8),
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default useStyles;
