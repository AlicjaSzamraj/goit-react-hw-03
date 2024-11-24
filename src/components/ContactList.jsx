import React from "react";
import Contact from "./Contact";
import "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
