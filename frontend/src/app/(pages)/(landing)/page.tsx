import { Hero } from "@/components/Hero/Hero";
import { Categories } from "./_components/Categories/Categories";
// import { BestSelling } from "./_components/BestSelling";
// import { BannerAd } from "./_components/BannerAd/BannerAd";
import { Products } from "./_components/Products";
import { Testimonials } from "./_components/Testimonials";
import { FEATURED_PRODUCTS, POPULAR_PRODUCTS } from "@/constants";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      {/* <BestSelling /> */}
      {/* <BannerAd /> */}
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
