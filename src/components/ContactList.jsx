import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { deleteContact } from '../redux/ContactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.filter);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // Apply filter to contacts
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
