import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  numbersBlockContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'default',
    marginTop: theme.customStyles.spacing.xLarge,
  },
  itemsBlockContainer: {
    width: '100%',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',
    '&:not(:last-child)': {
      marginBottom: theme.customStyles.spacing.small,
    },
  },
  numberDataContainer: {
    display: 'flex',
  },
  percentItemWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: theme.customStyles.spacing.large,
    width: theme.customStyles.dimension.percentItemWidth,
  },
  totalContainer: {
    display: 'flex',
    marginTop: theme.customStyles.spacing.large,
  },
  totalContentContainer: {
    display: 'flex',
    marginLeft: theme.customStyles.spacing.large,
  },
  resetButtonWrapper: {
    marginTop: theme.customStyles.spacing.xLarge,
  },
}));

export { useStyles };
