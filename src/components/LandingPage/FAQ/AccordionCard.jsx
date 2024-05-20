import React, { useState } from "react";
import styles from "../../../style";
import AccordionIteam from "./AccordionIteam";

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className={styles.paragraph}>
      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={1}
        title="1. What should I look for when buying a used car?"
        content="When buying a used car, it's essential to inspect the vehicle's condition, including its mileage, maintenance history, and any signs of damage or wear. Consider getting a pre-purchase inspection from a trusted mechanic to uncover any hidden issues before making a decision.
"
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>
      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={2}
        title="2. Is it better to buy from a dealership or a private seller?
"
        content="Both dealerships and private sellers have their advantages and disadvantages. Dealerships often offer certified pre-owned vehicles, warranties, and financing options, while private sellers may offer lower prices and more negotiation flexibility. Consider your preferences and priorities when deciding where to buy.
"
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>

      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={3}
        title="3. What is a vehicle history report, and why is it important?
"
        content="A vehicle history report provides information about a car's past, including its ownership history, accident history, service records, and more. It's essential to review a vehicle history report to identify any potential issues or red flags before purchasing a used car.
"
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>

      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={4}
        title="4. Can I test drive a used car before buying it?"
        content="Yes, it's highly recommended to test drive a used car before making a purchase. Test driving allows you to assess the car's performance, handling, and overall condition, as well as identify any potential issues that may not be apparent from photos or descriptions.
"
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>

      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={5}
        title="5. Do used cars come with warranties?"
        content="It depends on the age, mileage, and condition of the car, as well as the dealership's policies. 
        Some used car may come with a manufacturer's warranty or a dealership warranty, while others my be sold `as is` without any warranty coverage. Be sure to ask about warranty options
        before making a purchase. "
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>

      <AccordionIteam
        activeAccordionNumber={activeAccordionNumber}
        handleClick={handleClick}
        iteamNumber={6}
        title="6. What financing options are available for buying a used car?"
        content="Dealerships often offer financing options for used car purchases, including loans from banks, credit unions, and other lenders. Additionally, you may choose to secure financing independently through your bank or financial institution. Compare rates and terms to find the best financing option for your needs.
"
      />
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>
    </div>
  );
}

export default AccordionCard;

// FAQ

// 1. Question:
// What should I look for when buying a used car?

// Answer:
// When buying a used car, it's essential to inspect the vehicle's condition, including its mileage, maintenance history, and any signs of damage or wear. Consider getting a pre-purchase inspection from a trusted mechanic to uncover any hidden issues before making a decision.

// 2. Question:
// Is it better to buy from a dealership or a private seller?

// Answer:
// Both dealerships and private sellers have their advantages and disadvantages. Dealerships often offer certified pre-owned vehicles, warranties, and financing options, while private sellers may offer lower prices and more negotiation flexibility. Consider your preferences and priorities when deciding where to buy.

// 3. Question:
// What is a vehicle history report, and why is it important?

// Answer:
// A vehicle history report provides information about a car's past, including its ownership history, accident history, service records, and more. It's essential to review a vehicle history report to identify any potential issues or red flags before purchasing a used car.

// 4. Question:
// Can I test drive a used car before buying it?

// Answer:
// Yes, it's highly recommended to test drive a used car before making a purchase. Test driving allows you to assess the car's performance, handling, and overall condition, as well as identify any potential issues that may not be apparent from photos or descriptions.

// 5. Question:
// Do used cars come with warranties?

// Answer:
// It depends on the age, mileage, and condition of the car, as well as the dealership's policies. Some used cars may come with a manufacturer's warranty or a dealership warranty, while others may be sold "as is" without any warranty coverage. Be sure to ask about warranty options before making a purchase.

// 6. Question:
// What financing options are available for buying a used car?

// Answer:
// Dealerships often offer financing options for used car purchases, including loans from banks, credit unions, and other lenders. Additionally, you may choose to secure financing independently through your bank or financial institution. Compare rates and terms to find the best financing option for your needs.

