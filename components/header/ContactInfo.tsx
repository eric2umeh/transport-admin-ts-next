import React from "react";

const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Contact Tfare",
      action: "tel:+(1) 123 456 7890",
      text: "+(234) 123 456 7890",
    },
    {
      id: 2,
      title: "Email?",
      action: "mailto:xyz@abc.com",
      text: "tfaregroup@gmail.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
