import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm"
import SearchBox from "../components/SearchBox/SeachBox";
import ContactList from "../components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filterContacts} onDelete={handleDeleteContact} />
      </div>
    </>
  );
};

export default App;