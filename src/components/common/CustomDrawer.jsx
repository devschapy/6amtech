import React from 'react';
import { Icon } from '@iconify/react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';

const CustomDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(!open);

  return (
    <div>
      <Button onClick={openDrawer} className="bg-transparent">
        <Icon icon="eva:menu-fill" color="black" width="24" height="24" />
      </Button>

      <Drawer
        open={open}
        placement="right"
        onClose={openDrawer}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h2" color="blue-gray">
            Navigation Bar
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <Icon icon="maki:cross" width="16" height="16" />
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
