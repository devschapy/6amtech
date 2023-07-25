import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import HeaderMain from '@/components/HeaderMain';
import NavigationBar from '@/components/NavigationBar';
import TopSocialSection from '@/components/TopSocialSection';
import CustomCarousel from '@/components/common/CustomCarousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>6am Tech</title>
      </Head>
      <main>
        <TopSocialSection />
        <NavigationBar />
        <HeaderMain />

        <section className="container flex">
          <div className="w-[23%]"></div>
          <div className="pt-4 pl-4 flex gap-4 w-[77%]">
            <div className="w-[70%] space-y-4">
              <CustomCarousel />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-[30%] rounded-md overflow-hidden">
              <img
                alt="image 1"
                src="/image/static-banner-img.png"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
