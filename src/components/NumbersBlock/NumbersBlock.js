import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BUTTON, TITLE } from './constants';
import { useStyles } from './NumbersBlock.style';

const NumbersBlock = ({ handleResetList, itemsList, total }) => {
  const classes = useStyles();

  const handleReset = () => {
    handleResetList();
  };

  return (
    itemsList.length > 0 && (
      <div className={classes.numbersBlockContainer}>
        <div className={classes.itemsBlockContainer}>
          {itemsList.map(({ id, number, percent }, index) => (
            <div className={classes.itemContainer} key={id}>
              <div>
                <Typography variant="h5">{`${index + 1}.`}</Typography>
              </div>
              <div className={classes.numberDataContainer}>
                <div>
                  <Typography variant="h5">{number}</Typography>
                </div>
                <div className={classes.percentItemWrapper}>
                  <Typography variant="h5">{`${percent}%`}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.totalContainer}>
          <div>
            <Typography variant="h5">{TITLE.total}</Typography>
          </div>
          <div className={classes.totalContentContainer}>
            <div>
              <Typography variant="h5">{total}</Typography>
            </div>
            <div className={classes.percentItemWrapper}>
              <Typography variant="h5">{TITLE.totalPercentage}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.resetButtonWrapper}>
          <Button
            color="secondary"
            onClick={handleReset}
            size="large"
            variant="contained"
          >
            {BUTTON.reset.label}
          </Button>
        </div>
      </div>
    )
  );
};

NumbersBlock.propTypes = {
  handleResetList: PropTypes.func.isRequired,
  itemsList: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default NumbersBlock;
