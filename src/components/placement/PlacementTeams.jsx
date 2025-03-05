import PropTypes from "prop-types";
import { CheckCheckIcon } from "lucide-react";

const features = [
  {
    desc: "SSIM placement team is agile, committed and enduring in building long-term partnerships.",
    image: "https://ssim.ac.in/wp-content/uploads/elementor/thumbs/longterm-partnership-pyuvxqxhgxlteq39j1t2w7uorxeetkup79sifodmxk.png",
  },
  {
    desc: "The placement team has a collective experience of 25 years in Client Services.",
    image: "https://ssim.ac.in/wp-content/uploads/elementor/thumbs/experience-pyuw6e22jv70h962y2gtqr3xlxn8bqszwen9ijnrq8.png",
  },
  {
    desc: "Works towards bridging the talent gap by coordinating industry-institute collaborations.",
    image: "https://ssim.ac.in/wp-content/uploads/elementor/thumbs/bridging-pyuwaa40u6iqj5in8908k9rm4cgx6n903num0rw3z4.png",
  },
];

const FeaturedItem = ({ feature, index, image }) => {
  return (
    <div
      className={`bg-blue-100 dark:bg-slate-700 flex items-center rounded-xl p-2 ${
        index !== features.length - 1 ? "mb-4" : ""
      }`}
    >
      <div className="flex justify-center items-center text-lg min-w-16 h-16 bg-gray-100 text-white rounded-xl mr-3">
        <img src={image} alt="" className="w-12 h-12" />
      </div>
      <h4 className="text-[17px]">{feature.desc}</h4>
    </div>
  );
};

FeaturedItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function PlacementTeams() {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 items-start">
          <div className="col-span-2 md:col-span-1 md:order-2">
            <div className="relative mb-12">
              <img
                src="https://ssim.ac.in/wp-content/uploads/2022/12/placemnt.jpg"
                alt=""
                className="rounded-3xl w-full max-h-[490px] object-cover mx-auto"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 mt-12 md:mt-0 lg:mr-12">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl text-mainBlue mb-12">
              We focus on engaging industry to provide illuminating learning
              experiences and fulfilling career opportunities for our graduates.
            </h1>
            {features.map((feature, i) => (
              <FeaturedItem feature={feature} key={i} index={i} image={feature.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
