import  { useState } from "react";
function Faq()
 {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React Hook that lets you add state to a component.",
    },
    {
      question: "What is an accordion?",
      answer: "An accordion is a UI component that shows or hides content when clicked.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2><br></br><br></br>

      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            {faq.question}
          </button>

          {openIndex === index && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;



