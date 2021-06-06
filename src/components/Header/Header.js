import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { PROJECT_TITLE } from '../../globals/constants';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <Typography variant="h5">{PROJECT_TITLE}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
