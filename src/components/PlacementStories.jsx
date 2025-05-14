// import bg from "@/assets/landing/Placement-Banner.jpg";
import Container from "@/components/wrappers/Container";
import Heading from "@/components/Heading";
import ThreeDPlacementCard from "@/components/ThreeDPlacementCard";
import PlacementCardMarquee from "@/components/PlacementCardMarquee";
import { placementCards } from "@/data/placementData";

import { useEffect, memo } from "react";

const PlacementStories = () => {
  // Preload images
  useEffect(() => {
    placementCards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
      const logo = new Image();
      logo.src = card.logo;
    });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center transform-gpu"
      style={{
        // backgroundImage: `url(${bg})`,
        willChange: "transform",
      }}
    >
      <Container className="!py-0">
        <div>
          <Heading
            title="SSIM Placement Stories"
            titleClassName="!text-mainBlue text-left text-center"
            subtitleClassName="text-gray-500 !mx-auto !max-w-2xl m-0 lg:text-lg lg:font-normal lg:max-w-full text-center !text-base sm:!text-lg lg:!text-xl"
            subtitle="Our students are successfully placed in top companies, gaining invaluable experience and insights that enhance their skills and career prospects."
            className="lg:pb-10"
          />

          <PlacementCardMarquee>
            {placementCards.map((card) => (
              <ThreeDPlacementCard key={card.id} {...card} />
            ))}
          </PlacementCardMarquee>
        </div>
      </Container>
    </div>
  );
};

export default memo(PlacementStories);
