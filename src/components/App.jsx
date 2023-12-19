// import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StyledContainer } from './Container.styled';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, deleteContact } from '../redux/contactsSlice';

export const App = () => {
  // const dispatch = useDispatch();
  // const { contacts } = useSelector(state => state.contacts);
  // const { filter } = useSelector(state => state.filter);

  // const addContact = contact => {
  //   dispatch(addContact(contact));
  // };

  // const deleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // ===============================================

  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsData = JSON.parse(
  //     window.localStorage.getItem('CONTACTS_DATA')
  //   );

  //   if (contactsData?.length) {
  //     setContacts(contactsData);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = contact => {
  //   const { name, number } = contact;

  //   if (contacts.some(contact => contact.name === name)) {
  //     return alert(`${name} is already in contacts.`);
  //   }

  //   const newContact = {
  //     ...contact,
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts(prev => [...prev, newContact]);
  // };

  // const handleChangeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getFilteredData = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const handleDeleteContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <Form />
      {/* addContact={addContact} */}
      <h2>Contacts</h2>
      <Filter />
      <ContactsList
      // contacts={getFilteredData()}
      // onDelete={() => deleteContact(id)}
      />
    </StyledContainer>
  );
};
