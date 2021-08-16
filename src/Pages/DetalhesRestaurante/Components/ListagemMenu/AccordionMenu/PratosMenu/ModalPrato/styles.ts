import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  nameWrapper: {
    marginLeft: theme.spacing(2.5),
    maxWidth: 200,
  },
  imageWrapperModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageModal: {
    width: 450,
    height: 300,
    padding: theme.spacing(2.5),
  },
  desricaoPrecoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(1),
  },
  precoModal: {
    fontWeight: 'bolder',
  },
  botaoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  nameModal: {
    fontWeight: 'bolder',
  },
}));
export default useStyles;
