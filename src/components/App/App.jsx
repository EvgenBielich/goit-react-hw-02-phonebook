import { Component } from "react";
import { Form } from "../Form/Form";
import { Section } from "../Section/Section";
import { ContactsList } from "../ContactsList/ContactsList";
import { Filter } from "../Filter/Filter";
import { nanoid } from 'nanoid';

export class App extends Component {
state = {
   contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ],
   filter: "",
}

addContact = (data) => {
   if(this.checkExistingContact(data.name)) { return };

   const contact = {
      id: nanoid(),
      ...data,
   }
   
   this.setState(({contacts}) => ({contacts: [contact, ...contacts]}));
}

   setFilter = (name) => {
   this.setState({ filter: name });
}

filterContacts = () => {
	const {filter, contacts} = this.state;
	const normalizedFilter = filter.toLowerCase();

	return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
}

checkExistingContact = (newName) => {
		const existingСontact = this.state.contacts.find(({name}) => name === newName);

	if (existingСontact) {
		alert(`${existingСontact.name} is already in contacts`)
		return true;
	}
}

deleteContact = (contactId) => {
	this.setState(({contacts})=>({contacts: contacts.filter(({id}) => id !== contactId),
}))
}

render() {
   const { filter } = this.state;

   return <Section title="Phonebook">
            <Form onSubmit={this.addContact}></Form>
            <Section title="Contacts">
               <Filter filter={filter}  setFilter={this.setFilter} ></Filter>
               <ContactsList contacts={this.filterContacts()} deleteContact={this.deleteContact} ></ContactsList>
            </Section>
         </Section>
}
}