import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: '100vh',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `${theme.customStyles.spacing.large} ${theme.customStyles.spacing.base}`,
  },
}));

export { useStyles };
