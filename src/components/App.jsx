import { Component } from 'react';
import styled from '@emotion/styled';

import ContactsForm from './ContactsForm/ContactsForm';
import {Filter} from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  border: black solid 1px;
`

const Title = styled.h1`
  margin-bottom: 10px;
`
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = newContact => {
    this.state.contacts.find(el => el.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(state => ({ contacts: [...state.contacts, newContact] }));
  };

  filterChange = (e) => {
    this.setState({filter: e.target.value})
  }

  contactDelete = (contactId) => {
    this.setState(state => ({contacts: state.contacts.filter(contact => contact.id !== contactId)}))
  }

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm addNewContact={this.addNewContact} />
        <Title>Contacts</Title>
        <Filter
          filteredValue={this.state.filter}
          filterChange={this.filterChange}
        />
        <ContactList data={this.state} contactDelete={this.contactDelete} />
      </Container>
    );
  }
};
