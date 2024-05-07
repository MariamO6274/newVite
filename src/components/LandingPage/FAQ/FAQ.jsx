import styles from "../../../style";

const FAQ = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient box-shadow`}
  >
    {/* arrange text and button inside card */}
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Frequently asked questions</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Coming up ...
      </p>
    </div>

  </section>
);

export default FAQ;
