import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  numbersBlockContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'default',
    marginTop: theme.customStyles.spacing.xLarge,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: theme.customStyles.dimension.contentWidth,
    },
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
    justifyContent: 'space-between',
    marginTop: theme.customStyles.spacing.large,
    width: '100%',
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
