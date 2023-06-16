import { Box, Button } from '@mui/material';
import { handlePageChange } from '../../shared/helpers/utils';
import { NavButtonProps } from './types';


const NavButton = ({ navigate, newPage, filters, children }: NavButtonProps) => {

  

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Button
        variant="outlined"
        size="medium"
        onClick={() => handlePageChange(navigate, newPage, filters)}
      >
        {children}
      </Button>
    </Box>
  );
};

export default NavButton;
