import fetchData from '@/utility/api';
import React, { useEffect, useState } from 'react';
import CustomImage from '@/components/common/CustomImage';
import CustomCarousel from '@/components/common/CustomCarousel';

const BannerSection = () => {
  const [mainBanners, setMainBanners] = useState([]);

  //   useEffect(() => {
  //     const fetchDataFromAPI = async () => {
  //       const mainBannerUrl = `https://6valley.sixamtech.com/react/api/v4/?banner_type=main_banner`;
  //       const res = await fetchData(mainBannerUrl);
  //       if (res) setMainBanners(res);
  //     };

  //     fetchDataFromAPI();
  //   }, []);

  return (
    <section className="container flex">
      <div className="w-[23%] hidden lg:block"></div>
      <div className="pt-4 pl-4 md:flex gap-3 w-full lg:w-[77%] space-y-4 md:space-y-0">
        <div className="md:w-[70%] space-y-4">
          <CustomCarousel />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-full w-full rounded-lg overflow-hidden">
              <CustomImage
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              />
            </div>
            <div className="h-full w-full rounded-lg overflow-hidden">
              <CustomImage
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[30%] rounded-md overflow-hidden">
          <CustomImage
            className="h-full w-full object-cover"
            src="/image/static-banner-img.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
