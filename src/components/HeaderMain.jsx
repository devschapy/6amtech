import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
  MenuHandler,
} from '@material-tailwind/react';
import DropMenuCategory from './DropMenuCategory';

const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="border-t border-b">
      <div className="container bg-red-200">
        <DropMenuCategory/>
      </div>
    </section>
  );
};

export default HeaderMain;
