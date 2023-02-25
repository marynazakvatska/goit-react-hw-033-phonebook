import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList";
import Form from "./Form";
import Filter from "./Filter";

export class App extends Component {
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
}

 
  
  addContact = ({name, number}) => {
 
 const { contacts } = this.state;
        console.log( contacts );

    const contact = {
      id: nanoid(),
      name,
      number,
    }
 
     console.log(contact)
    /* this.setState({ contacts:  data  }) */ //доступ к state Form на момент сабмита
          contacts.find(cont =>
      cont.name.toLowerCase().includes(contact.name.toLowerCase()) 
    )
      ? alert(`${contact.name} is already in your list`)
      : this.setState(prevState => {
        return {
        contacts: [contact, ...prevState.contacts],
      }
          
        })

}

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisisbleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts)
    )
   
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
  contacts : prevState.contacts.filter(contact => contact.id !== id)
}))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts : parsedContacts})
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('app componentiidUpdate')
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }


  render() {
    const visibleContacts = this.getVisisbleContacts();

     return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
           color: '#010101',
           marginLeft: 30,
          backgroundColor: 'powderblue',
           
      }}
    >
 
         
        <h1>Phonebook</h1>
         <Form onSubmit={this.addContact} />      {/* //onSubmit = prop на компоненте */}
     

         <h2>Contacts</h2>
         <Filter value={this.state.filter} onChange={this.changeFilter} />


         <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
  

    </div>
  );
  }
 
};
