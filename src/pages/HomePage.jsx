import Testimonial from "@/components/Testimonial";
import LatestBlogsAndEvents from "@/components/LatestBlogs&Events";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import ImmLegacySection from "../components/ImmLegacySection";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <Carousel />
      <LatestBlogsAndEvents />
      <Testimonial />
      <ImmLegacySection />
    </>
  );
}
