import { Component } from 'react';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export default class ContactsForm extends Component {
    state = {
        name: '',
    }

    handleInputNameChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    submitContact = e => {
        e.preventDefault();

        const newContact = {
            id: nanoid(5),
            name: this.state.name,
        }

        this.props.addNewContact(newContact);

        this.setState({ name: '',});
    }

    render () {
        return (
          <form onSubmit={this.submitContact}>
            <label htmlFor="name">
              Name
              <input
                onChange={this.handleInputNameChange}
                value={this.state.name}
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type='submit'>Add Contact</button>
          </form>
        );
    }
}

ContactsForm.propTypes = {
    addNewContact: PropTypes.func.isRequired,
}

