import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { BUTTON, INPUT_FIELD, TITLE } from './constants';
import { useStyles } from './InputBlock.style';

const InputBlock = ({ handleInputNumbers }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setInputValue('');

    const numberInput = Number(inputValue);

    handleInputNumbers(numberInput);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classes.inputBlockContainer}>
      <div>
        <Typography variant="h4">{TITLE}</Typography>
      </div>
      <div className={classes.inputAndButtonContainer}>
        <div className={classes.inputWrapper}>
          <TextField
            className={classes.textField}
            fullWidth
            label={INPUT_FIELD.placeholder}
            onChange={e => handleInputChange(e)}
            onKeyDown={e => handleSubmitOnEnter(e)}
            value={inputValue}
            variant="outlined"
          />
        </div>
        <div>
          <Button
            className={classes.addButton}
            color="primary"
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            {BUTTON.add.label}
          </Button>
        </div>
      </div>
    </div>
  );
};

InputBlock.propTypes = {
  handleInputNumbers: PropTypes.func.isRequired,
};

export default InputBlock;
