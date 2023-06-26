import React from "react";
import Header from "./Header";
import Addcontact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "maivia@gmail.com",
    },
    {
      id: "2",
      name: "Nipove",
      email: "ghaedtiy@gmail.com",
    },
    {
      id: "3",
      name: "Basht",
      email: "laneshe@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <Addcontact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
