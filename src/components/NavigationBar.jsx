import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Button, Badge } from '@material-tailwind/react';
import CustomImage from '@/components/common/CustomImage';
import CustomDrawer from '@/components/common/CustomDrawer';

const NavigationBar = () => {
  return (
    <section className="container flex justify-between py-4">
      <Link href="/">
        <CustomImage src="/image/logo.png" className="w-[12rem]" />
      </Link>

      <div className="relative hidden lg:flex items-center w-[40%] h-[4.4rem] gap-2 bg-white border shadow-sm rounded-full px-3 py-1">
        <div className="flex gap-3 items-center text-xs text-[#A2B1C1] min-w-[13rem] h-full">
          <Icon icon="eva:menu-fill" color="#A2B1C1" width="16" height="16" />
          <p>All Categories</p>
          <Icon
            icon="material-symbols:arrow-drop-down"
            color="#a2b1c1"
            width="18"
            height="18"
          />
        </div>

        <input
          type="search"
          placeholder="Search for item or store"
          className="pr-20 border-0 w-full h-full focus:outline-none px-3 placeholder:text-xs placeholder:text-[#A2B1C1]"
        />
        <Button
          size="sm"
          className="!absolute h-[99%] w-[12%] min-w-[4rem] right-[0.1%] top-1/2 transform -translate-y-1/2 rounded-r-full justify-center flex items-center"
        >
          <Icon icon="bx:search" color="white" width="20" height="20" />
        </Button>
      </div>

      <div className=" hidden lg:flex gap-3 items-center">
        <div className="border-r flex gap-3 pr-7">
          <Button variant="text" className="rounded-full px-1 py-1">
            <Icon icon="circum:dark" width="28" height="28" color="#A2B1C1" />
          </Button>
          <Button variant="text" className="rounded-full px-1 py-1">
            <Icon
              icon="mingcute:user-4-fill"
              color="#A2B1C1"
              width="28"
              height="28"
            />
          </Button>
        </div>

        <div className="border-r px-7">
          <Badge
            content={1}
            className="bg-gradient-to-tr from-primary-100 to-primary-100 border-2 border-white shadow-lg shadow-black/20"
          >
            <Button variant="text" className="rounded-full px-1 py-1">
              <Icon
                icon="teenyicons:loop-outline"
                color="#a2b1c1"
                width="20"
                height="20"
              />
            </Button>
          </Badge>
        </div>
        <div className="border-r px-7">
          <Badge
            content={1}
            className="bg-gradient-to-tr from-primary-100 to-primary-100 border-2 border-white shadow-lg shadow-black/20"
          >
            <Button variant="text" className="rounded-full px-1 py-1">
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                color="#a2b1c1"
                width="20"
                height="20"
              />
            </Button>
          </Badge>
        </div>

        <Badge
          content={5}
          className="bg-gradient-to-tr from-primary-100 to-primary-100 border-2 border-white shadow-lg shadow-black/20"
        >
          <Button variant="text" className="rounded-full px-1 py-1">
            <Icon
              icon="lucide:shopping-bag"
              color="#A2B1C1"
              width="20"
              height="20"
            />
          </Button>
        </Badge>
      </div>
      <div className="lg:hidden">
        <CustomDrawer />
      </div>
    </section>
  );
};

export default NavigationBar;
