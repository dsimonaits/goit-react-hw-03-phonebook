import React, { Component } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {}

  addContact = data => {
    const id = nanoid();
    const { contacts } = this.state;
    const newContact = { ...data, id };

    contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterValue = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  FilterContactsByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const contactsByName = this.FilterContactsByName();
    return (
      <>
        <Section title="Phonebook" border="false">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts" border="true">
          {this.state.contacts.length === 0 ? (
            <p>Sorry your contact list is empty. Add someone.</p>
          ) : (
            <Filter value={filter} onChange={this.filterValue} />
          )}

          <ContactList
            contacts={contactsByName}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
