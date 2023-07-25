import Head from 'next/head';
import HeaderMain from '@/components/HeaderMain';
import NavigationBar from '@/components/NavigationBar';
import BannerSection from '@/components/BannerSection';
import TopSocialSection from '@/components/TopSocialSection';
import CustomDrawer from '@/components/common/CustomDrawer';

export default function Home() {
  return (
    <>
      <Head>
        <title>6Valley</title>
      </Head>
      <main className="pb-5">
        <TopSocialSection />
        <NavigationBar />
        <HeaderMain />
        <BannerSection />
      </main>
    </>
  );
}
