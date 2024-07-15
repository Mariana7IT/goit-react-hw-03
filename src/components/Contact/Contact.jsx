import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s.wrapper}>
      <div className={s.contactContainer}>
        <span className={s.contactSpan}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={s.contactSpan}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <button onClick={() => onDelete(contact.id)} className={s.contactBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
