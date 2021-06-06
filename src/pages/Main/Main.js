import { useState } from 'react';

import Header from '../../components/Header';
import InputBlock from '../../components/InputBlock';
import NumbersBlock from '../../components/NumbersBlock';
import { useStyles } from './Main.style';

const Main = () => {
  const classes = useStyles();
  const [itemsList, setItemsList] = useState([]);
  const [total, setTotal] = useState(0);

  const calcPercent = (num, totalValue) => {
    const result = (num * 100) / totalValue;

    return parseFloat(result.toFixed(1));
  };

  const handleInputNumbers = number => {
    const sum = total + number;
    const inputNumbers = itemsList.map(item => item.number);
    const newList = [...inputNumbers, number];
    const mappedList = newList.map((num, index) => ({
      id: index,
      number: num,
      percent: calcPercent(num, sum),
    }));

    setItemsList(mappedList);

    setTotal(sum);
  };

  const handleResetList = () => {
    setItemsList([]);
    setTotal(0);
  };

  return (
    <div className={classes.mainContainer}>
      <Header />
      <div className={classes.contentContainer}>
        <InputBlock handleInputNumbers={handleInputNumbers} />
        <NumbersBlock
          handleResetList={handleResetList}
          itemsList={itemsList}
          total={total}
        />
      </div>
    </div>
  );
};

export default Main;
