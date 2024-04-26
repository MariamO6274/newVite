import { features } from "../../../../src/constants";
import styles, { layout } from "../../../style";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";



const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* icons star, check and airplain plus dynamic title and text */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <MdOutlineStarBorderPurple500 size={35} className=" text-primary" />
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  // turn it into section
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Customer Education
        and Support
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Provide educational resources, guides, and tips on topics such as car
        maintenance, financing options, and navigating the car buying process.
        Offer ongoing customer support to address any questions or concerns they
        may have before, during, and after the purchase.
      </p>

      <button
        type="button"
        className={`py-4 px-6 mt-10 font-poppins font-medium text-[18px] text-primary bg-black-gradient-2 rounded-[10px] outline-none ${styles}`}
      >
        Contact Us
      </button>
    </div>

    {/* difiend up there , reusable*/}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;

