import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledInput, StyledButton } from './Form.styled';
import { useState } from 'react';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    if (contacts.some(contact => contact.name === name)) {
      setName('');
      setNumber('');
      return alert(`${name} is already in contacts.`);
    } else if (contacts.some(contact => contact.number === number)) {
      setName('');
      setNumber('');
      return alert(`This number (${number}) is already in contacts.`);
    }
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <StyledInput
        onChange={handleChangeName}
        id="name"
        type="text"
        name="name"
        value={name}
        required
      />
      <br />
      <label htmlFor="number">Number</label>
      <br />
      <StyledInput
        onChange={handleChangeNumber}
        id="number"
        type="tel"
        name="number"
        value={number}
        required
      />
      <br />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
