import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PratosMenu from './PratosMenu';
import { IMenu } from '../../../../../Types';

type CollapseMenuProps = {
  menu: IMenu;
};

const AccordionMenu = ({ menu }: CollapseMenuProps) => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{menu.group}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Grid container spacing={3}>
              {menu.foods.map((food) => (
                <Box>
                  <PratosMenu
                    key={food.foodId}
                    name={food.name}
                    price={food.price}
                    image={food.image}
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionMenu;
