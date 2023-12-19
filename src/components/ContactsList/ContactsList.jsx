import React from 'react';
// import { nanoid } from 'nanoid';
// import { Contact } from 'components/Contact/Contact';
import {
  StyledButton,
  StyledList,
  StyledListItem,
  StyledText,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const state = useSelector(state => state);
  console.log(state);

  const dispatch = useDispatch();

  const getFilteredData = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredData();

  return (
    <StyledList>
      {filteredContacts.map(({ name, number, id }) => (
        <StyledListItem key={id}>
          <StyledText>
            {name}: {number}
          </StyledText>
          <StyledButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
