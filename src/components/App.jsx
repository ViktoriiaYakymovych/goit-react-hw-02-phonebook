import { Component } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
  };

  addNewContact = newContact => {
    this.setState(state => ({contacts: [...state.contacts, newContact]}));
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm addNewContact={this.addNewContact}/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  }
};
