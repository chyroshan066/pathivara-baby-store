import { BannerAd } from "@/components/BannerAd";
import { BestSelling } from "@/components/BestSelling";
import { Categories } from "@/components/Categories/Categories";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Preloader } from "@/components/Preloader/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Categories />
      <BestSelling />
      <BannerAd />
    </>
  );
}
