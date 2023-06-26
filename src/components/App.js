import React, { useState } from "react";
import Header from "./Header";
import Addcontact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  return (
    <div className="ui container">
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
