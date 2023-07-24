import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import HeaderMain from '@/components/HeaderMain';
import NavigationBar from '@/components/NavigationBar';
import TopSocialSection from '@/components/TopSocialSection';

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
      </main>
    </>
  );
}
