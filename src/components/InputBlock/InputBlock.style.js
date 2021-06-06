import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputBlockContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputAndButtonContainer: {
    display: 'flex',
    marginTop: theme.customStyles.spacing.base,
  },
  textField: {
    [`& fieldset`]: {
      'border-top-right-radius': 0,
      'border-bottom-right-radius': 0,
    },
  },
  inputWrapper: {
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: theme.customStyles.dimension.inputWidth,
    },
  },
  addButton: {
    'border-top-left-radius': 0,
    'border-bottom-left-radius': 0,
    height: theme.customStyles.dimension.addButtonHeight,
  },
}));
export { useStyles };
