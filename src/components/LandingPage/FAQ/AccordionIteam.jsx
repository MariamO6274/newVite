import React from 'react'

function AccordionIteam(props) {
    const { handleClick, activeAccordionNumber, iteamNumber, title, content } =
      props;
  return (
    <div onClick={() => handleClick(iteamNumber)}>
      {title}
      {activeAccordionNumber === iteamNumber ? <p>{content}</p> : null}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>
    </div>
  );
}

export default AccordionIteam

