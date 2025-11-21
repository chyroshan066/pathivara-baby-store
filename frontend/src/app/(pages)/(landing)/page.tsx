import { BannerAd } from "@/components/BannerAd";
import { BestSelling } from "@/components/BestSelling";
import { Categories } from "@/components/Categories/Categories";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { FEATURED_PRODUCTS, POPULAR_PRODUCTS } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSelling />
      <BannerAd />
      <Products
        title="Featured products"
        productArray={FEATURED_PRODUCTS}
        sectionClassName="pt-0"
      />
      <Products
        title="Popular products"
        productArray={POPULAR_PRODUCTS}
        sectionClassName="pt-0 mt-n8"
      />
      <Testimonials />
    </>
  );
}
