import { Icon } from '@iconify/react';
import fetchData from '@/utility/api';
import React, { useState, useEffect } from 'react';
import { Menu, MenuList, MenuHandler } from '@material-tailwind/react';

const DropMenuCategory = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [categories, setCategories] = useState([]);
  const [accordionMenu, setAccordionMenu] = useState(null);
  const [accordionChildMenu, setAccordionChildMenu] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const categoriesUrl = `https://6valley.sixamtech.com/react/api/v4/categories`;
      const res = await fetchData(categoriesUrl);
      if (res) setCategories(res);
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className="relative w-[23%] h-[4.4rem]">
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
        {categories?.map((item, idx) => (
          <div key={idx}>
            {!item.childes.length ? (
              <li
                onMouseEnter={() =>
                  setAccordionMenu(accordionMenu == item.id ? null : item.id)
                }
                className="text-sm text-secondary-100 border-t py-4 flex justify-between items-center hover:bg-secondary-10 duration-300 hover:text-primary-100 cursor-pointer"
              >
                <span>{item.name}</span>
              </li>
            ) : (
              <li
                className={`${
                  accordionMenu == item.id
                    ? 'bg-secondary-10 text-primary-100'
                    : 'text-secondary-100 hover:bg-secondary-10 hover:text-primary-100'
                } text-sm border-t pr-1 duration-300`}
              >
                <Menu
                  placement="right-start"
                  open={accordionMenu == item.id ? true : false}
                  allowHover={accordionMenu == item.id ? false : true}
                  handler={() =>
                    setAccordionMenu(accordionMenu == item.id ? null : item.id)
                  }
                >
                  <MenuHandler>
                    <div className="flex justify-between items-center w-full py-4 group">
                      {item.name}
                      <span
                        className={`${
                          accordionMenu == item.id
                            ? 'rotate-180'
                            : 'group-hover:rotate-180'
                        } duration-300`}
                      >
                        <Icon
                          icon="ep:arrow-down-bold"
                          width="14"
                          height="14"
                        />
                      </span>
                    </div>
                  </MenuHandler>

                  <MenuList className="overflow-visible">
                    {item.childes?.map((child, idx) => (
                      <div
                        key={idx}
                        className={`${idx < 1 ? '' : 'border-t'} ${
                          accordionChildMenu == child.id
                            ? 'text-primary-100 bg-secondary-10'
                            : 'hover:text-primary-100 hover:bg-secondary-10'
                        } hover:outline-none rounded`}
                      >
                        {!child.childes.length ? (
                          <div
                            className="py-3 px-2"
                            onMouseEnter={() =>
                              setAccordionChildMenu(
                                accordionChildMenu == child.id ? null : child.id
                              )
                            }
                          >
                            {child.name}
                          </div>
                        ) : (
                          <div className="relative group">
                            <div
                              onMouseEnter={() => {
                                if (accordionChildMenu !== child.id)
                                  setAccordionChildMenu(
                                    accordionChildMenu == child.id
                                      ? null
                                      : child.id
                                  );
                              }}
                              className="flex justify-between items-center w-full py-4 px-2 group hover:outline-none"
                            >
                              {child.name}
                              <span
                                className={`${
                                  accordionChildMenu == child.id
                                    ? 'rotate-180'
                                    : 'group-hover:rotate-180'
                                } duration-300`}
                              >
                                <Icon
                                  icon="ep:arrow-down-bold"
                                  width="14"
                                  height="14"
                                />
                              </span>
                            </div>

                            <div className="bg-white top-0 z-[9999] left-[100%] min-w-[20rem] max-h-[16rem] rounded-md shadow-md absolute right-0 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto text-secondary-100 p-3">
                              {child.childes.map((childItem, idx) => (
                                <div
                                  key={idx}
                                  className={`${
                                    idx < 1 ? '' : 'border-t'
                                  } py-3 px-3 hover:text-primary-100 hover:bg-secondary-10`}
                                >
                                  {childItem.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
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
