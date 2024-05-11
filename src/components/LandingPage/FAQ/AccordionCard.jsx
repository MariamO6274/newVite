import React, { useState } from 'react'
import styles from "../../../style"

function AccordionCard() {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles.paragraph}>
      <div onClick={() => setIsVisible(!isVisible)}>
        Accordion title card 1-What should I look for when buying a used car?
        {isVisible ? (
          <p>
            When buying a used car, it's essential to inspect the vehicle's
            condition, including its mileage, maintenance history, and any signs
            of damage or wear. Consider getting a pre-purchase inspection from a
            trusted mechanic to uncover any hidden issues before making a
            decision.
          </p>
        ) : null}
      </div>

      <div onClick={() => setIsVisible(!isVisible)}>
        Accordion title card 22222
        {isVisible ? (
          <p>
            texs 222
          </p>
        ) : null}
      </div>

      {/* <div>Accordion card 2</div> */}
    </div>
  );
}

export default AccordionCard

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
