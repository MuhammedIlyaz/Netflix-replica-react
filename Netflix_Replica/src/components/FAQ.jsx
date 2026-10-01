import { useState } from "react";


function FAQ() {
const [openIndex,setOpenIndex] = useState(null);

    const questions =[
        {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers movies, TV shows and other entertainment."
    },

    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers different membership plans with different prices."
    },

    {
      question: "Where can I watch?",
      answer:
        "You can watch on your phone, computer, tablet, smart TV and other supported devices."
    },

    {
      question: "How do I cancel?",
      answer:
        "You can cancel your membership through your account settings."
    }
    ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) =>(

            <div className="faq-item" key={item.question}>
                <div className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <span>{item.question}</span>
                    <span>{openIndex === index ? 'x' : '+'}</span>
                </div>

                {openIndex === index && (
                    <div className="faq-answer">
                        {item.answer}
                    </div>
                )}

            </div>

        ))}

    </div>
    </section>
  );
}
export default FAQ;
