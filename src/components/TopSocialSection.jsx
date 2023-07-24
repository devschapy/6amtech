import Link from 'next/link';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import CustomSelect from '@/components/common/CustomSelect';
import CustomButton from '@/components/common/CustomButton';
import { Button } from '@material-tailwind/react';

const TopSocialSection = () => {
  const [countries, setCountries] = useState([
    { id: 1, title: 'USD' },
    { id: 2, title: 'BD' },
  ]);
  const [langs, setLangs] = useState([
    { id: 1, title: 'English' },
    { id: 2, title: 'Bangla' },
  ]);

  return (
    <section className="bg-secondary-100">
      <div className="container py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 order-2 md:order-1">
            <CustomButton btnType="primary">Become a Seller</CustomButton>
            <CustomButton className='shadow-0'>Free Express Shipping</CustomButton>
          </div>

          <div className="flex gap-5 items-center order-1 md:order-2">
            <CustomSelect options={countries} name="country" id="country" />
            <CustomSelect options={langs} name="lang" id="lang" />

            <Link href="/">
              <Icon
                icon="mdi:twitter"
                width='18'
                height='18'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="ps:linkedin"
                width='16'
                height='16'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="ant-design:google-plus-outlined"
                width='20'
                height='20'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="cib:pinterest-p"
                width='18'
                height='18'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="mdi:instagram"
                width='18'
                height='18'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
            <Link href="/">
              <Icon
                icon="carbon:logo-facebook"
                width='18'
                height='18'
                color="white"
                className="hover:scale-110 duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSocialSection;
