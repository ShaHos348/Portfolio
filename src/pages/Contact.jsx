import "./styles/Contact.css";
import contactData from "./data/contactData";

const Contact = () => {
  const handleOnClick = (link) => {
    window.location.href = link;
  };

  return (
    <div id="links" className="section">
      <h1 className="section-header">Contact Me</h1>
      <div className="contact-container">
        {contactData.map((contact, index) => (
          <div
            className="contact"
            key={index}
            onClick={() => handleOnClick(contact.link)}
          >
            <img className="contact-icon" src={contact.image} alt="" />
            <p className="contact-name">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
