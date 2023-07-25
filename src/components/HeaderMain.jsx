import Link from 'next/link';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DropMenuCategory from './DropMenuCategory';

const HeaderMain = () => {
  return (
    <section className="border-t border-b hidden lg:block">
      <div className="container flex gap-6">
        <DropMenuCategory />

        <ul className="flex items-center text-sm text-secondary-100 h-[4.4rem]">
          <li className="h-full">
            <Link
              href="/"
              className="h-full flex items-center hover:bg-secondary-10 duration-300 px-8"
            >
              Home
            </Link>
          </li>
          <li className="h-full flex gap-2 items-center group hover:bg-secondary-10 duration-300 px-8 relative">
            <span>Offers</span>
            <Icon icon="ep:arrow-down-bold" width="12" height="12" />

            <div className="absolute left-0 top-[110%] group-hover:top-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto p-4 duration-100 rounded-b-lg shadow-sm border min-w-[40rem] z-[999] group-hover:visible invisible bg-white">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
              </div>
            </div>
          </li>
          <li className="h-full flex gap-2 items-center group hover:bg-secondary-10 duration-300 px-8 relative">
            <span>Stores</span>
            <Icon icon="ep:arrow-down-bold" width="12" height="12" />

            <div className="absolute left-0 top-[110%] group-hover:top-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto p-4 duration-100 rounded-b-lg shadow-sm border min-w-[40rem] z-[999] group-hover:visible invisible bg-white">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
              </div>
            </div>
          </li>
          <li className="h-full flex gap-2 items-center group hover:bg-secondary-10 duration-300 px-8 relative">
            <span>Brands</span>
            <Icon icon="ep:arrow-down-bold" width="12" height="12" />

            <div className="absolute left-0 top-[110%] group-hover:top-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto p-4 duration-100 rounded-b-lg shadow-sm border min-w-[40rem] z-[999] group-hover:visible invisible bg-white">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="ic:outline-image"
                    color="#ccc"
                    width="28"
                    height="28"
                  />
                  <span>Deluxe Online</span>
                </div>
              </div>
            </div>
          </li>
          <li className="h-full">
            <Link
              href="/"
              className="h-full flex items-center gap-3 hover:bg-secondary-10 duration-300 px-8"
            >
              <span>Discounted Products</span>{' '}
              <Icon
                icon="iconamoon:discount-light"
                width="20"
                height="20"
                color="#ffcb05"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeaderMain;
