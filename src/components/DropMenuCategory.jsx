import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

export const menuCategories = [
  {
    id: 1,
    title: 'Camera Accessories',
  },
  {
    id: 2,
    title: 'TV & Home Appliance',
    child: [
      {
        id: 1,
        title: 'Television',
      },
      {
        id: 2,
        title: 'Refrigerator',
        child: [
          {
            id: 1,
            title: 'Top Freeze Refrigerator',
          },
        ],
      },
      {
        id: 3,
        title: 'MicroWaves',
      },
      {
        id: 4,
        title: 'Air Conditioner',
      },
    ],
  },
  {
    id: 3,
    title: 'Audio',
    child: [],
  },
  {
    id: 4,
    title: 'Smartphone',
  },
  {
    id: 5,
    title: 'Wearable',
    child: [],
  },
  {
    id: 6,
    title: 'Mobile Accessories',
    child: [],
  },
  {
    id: 7,
    title: 'Gadgets',
  },
  {
    id: 3,
    title: 'Computer & Office',
    child: [],
  },
];

const DropMenuCategory = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="relative w-[26rem] h-[4.4rem]">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className=" bg-primary-100 h-full flex items-center gap-4 px-4 text-sm text-white relative cursor-pointer"
      >
        <Icon icon="eva:menu-fill" color="white" width="24" height="24" />
        <span>Browser Category</span>
        <span
          className={`${
            openMenu ? '' : 'rotate-180'
          } absolute right-6 duration-300`}
        >
          <Icon
            icon="ep:arrow-down-bold"
            width="16"
            height="16"
            color="white"
          />
        </span>
      </div>

      <ul
        className={`${
          openMenu
            ? 'px-4 h-auto opacity-100 visible top-[4.4rem]'
            : 'h-0 opacity-0 invisible z-0 top-[6rem]'
        } bg-white w-full absolute duration-300 left-0 border rounded-b-md`}
      >
        {menuCategories.map((item, idx) => (
          <div key={idx}>
            {!item.child ? (
              <li className="text-sm text-secondary-100 border-t py-4 flex justify-between items-center">
                <span>{item.title}</span>
              </li>
            ) : (
              <li className="text-sm text-secondary-100 border-t py-4 flex justify-between items-center">
                <Menu allowHover placement="right-start">
                  <MenuHandler>
                    <div className='flex justify-between items-center w-full'>
                      {item.title}
                      <span
                      // className={`${
                      //   openMenu ? '' : 'rotate-180'
                      // } absolute right-6 duration-300`}
                      >
                        <Icon
                          icon="ep:arrow-down-bold"
                          width="14"
                          height="14"
                          //   color="white"
                        />
                      </span>
                    </div>
                  </MenuHandler>

                  <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                    <hr className="my-3" />
                    <MenuItem>Menu Item 4</MenuItem>
                  </MenuList>
                </Menu>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DropMenuCategory;
