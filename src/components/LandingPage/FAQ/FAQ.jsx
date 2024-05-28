import styles from "../../../style";
import AccordionCard from "./AccordionCard";

const FAQ = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient box-shadow`}
  >
    {/* <div className={styles.heading2}>Frequently asked questions:</div> */}
    <AccordionCard />
  </section>
);

export default FAQ;



