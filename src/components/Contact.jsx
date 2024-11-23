import React from "react";
import  "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact }) => {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <div className="contact-name">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>{contact.name}</span>
        </div>
        <div className="contact-number">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>{contact.number}</span>
        </div>
      </div>
    </li>
  );
};

export default Contact;
