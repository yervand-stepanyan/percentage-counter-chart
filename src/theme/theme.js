import { createMuiTheme } from '@material-ui/core';

const ADD_BUTTON_HEIGHT = 56;
const INPUT_WIDTH = 300;
const MAIN_SPACING_VALUE = 16;
const PERCENT_ITEM_WIDTH = 60;

export const theme = createMuiTheme({
  customStyles: {
    dimension: {
      addButtonHeight: `${ADD_BUTTON_HEIGHT}px`, // 56px
      inputWidth: `${INPUT_WIDTH}px`, // 300px
      percentItemWidth: `${PERCENT_ITEM_WIDTH}px`, // 60px
    },
    spacing: {
      xSmall: `${MAIN_SPACING_VALUE / 4}px`, // 4px
      small: `${MAIN_SPACING_VALUE / 2}px`, // 8px
      base: `${MAIN_SPACING_VALUE}px`, // 16px
      large: `${MAIN_SPACING_VALUE * 2}px`, // 32px
      xLarge: `${MAIN_SPACING_VALUE * 3}px`, // 48px
    },
  },
});
