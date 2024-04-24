import styles from "../../../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient box-shadow`}
  >
    {/* arrange text and button inside card */}
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Let Us Guide You to Your Ideal Car Choice!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover you ideal ride, Expert Assistance in Finding the Perfect
        Vehicle for You, Start Your Journey Now, Experience Car Buying Made
        Simple
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-black-gradient-2 rounded-[10px] outline-none ${styles}`}
      >
        Contact Us
      </button>
    </div>
  </section>
);

export default CTA;

