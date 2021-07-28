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
    borderRadius: 2,
  },

  nameWrapper: {
    marginLeft: theme.spacing(2.5),
    maxWidth: 200,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 12,
  },

  preco: {
    fontSize: 16,
    fontWeight: 'bolder',
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

  descricaoModal: {
    fontSize: 12,
  },

  precoModal: {
    fontSize: 20,
    fontWeight: 'bolder',
  },

  botaoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },

  nameModal: {
    fontSize: 20,
    fontWeight: 'bolder',
  },
}));
export default useStyles;
