import React from "react";
import { FiSearch } from "react-icons/fi";

const Contact = () => {
  const allContacts = [
    {
      imgUrl:
        "https://img.freepik.com/premium-photo/3d-cartoon-boy-studying-wearing-glasses-by-ai-generator_990473-214.jpg",
      name: "mike taylor",
      location: "Chicago, TX",
    },
    {
      imgUrl:
        "https://t4.ftcdn.net/jpg/07/90/45/99/360_F_790459903_8ZCmqZlq0EZTyuMWTAwgnm2PFofCQRIL.jpg",
      name: "jack green",
      location: "Oakland, CO",
    },
    {
      imgUrl:
        "https://t3.ftcdn.net/jpg/07/43/19/20/360_F_743192015_RhQC7pxfJfDbtc0Q6hHNSZDpXS6LYvHv.jpg",
      name: "carmen lewis",
      location: "Milwaukee, CA",
    },
    {
      imgUrl:
        "https://img.freepik.com/premium-photo/3d-avatar-indian-woman-smiling-with-long-hair-earrings_590796-10777.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid",
      name: "micheal richardson",
      location: "Tampa, CA",
    },
    {
      imgUrl:
        "https://i.pinimg.com/236x/f2/68/f9/f268f9f22e598fc8f23ba7c1ee57d74e.jpg",
      name: "willie cole",
      location: "Seattle, MO",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/3d-illustration-beautiful-business-woman-with-long-brown-hair-glasses_1057-45866.jpg",
      name: "phyllis weber",
      location: "Tampa, NY",
    },
  ];

  return (
    <>
      <div className="contacts-heading d-flex align-items-center justify-content-between">
        <h3 className="text-capitalize fw-bold">contacts</h3>
        <span className="search-contacts d-flex gap-2">
          {/* <input type="text" className="search-input" /> */}
          <FiSearch />
        </span>
      </div>
      <p className="fw-semibold fs-7 py-3">Last Payment Sent 2 days ago</p>
      <div className="d-flex flex-column gap-2 all-contacts">
        {allContacts.map((contact) => (
          <div className="contact d-flex gap-3" key={contact.imgUrl}>
            <div className="contact-img">
              <img src={contact.imgUrl} alt="contact-img1" />
            </div>
            <div className="contact-info d-flex flex-column gap-1 justify-content-center">
              <h6 className="text-capitalize fw-bold">{contact.name}</h6>
              <p className="fs-7 text-muted">{contact.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
