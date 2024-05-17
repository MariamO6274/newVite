import React from 'react'

function AccordionIteam(props) {
    const { handleClick, activeAccordionNumber, iteamNumber, title, content } =
      props;
  return (
    <div onClick={() => handleClick(iteamNumber)}>
      {title}
      {activeAccordionNumber === iteamNumber ? <p>{content}</p> : null}
    </div>
  );
}

export default AccordionIteam