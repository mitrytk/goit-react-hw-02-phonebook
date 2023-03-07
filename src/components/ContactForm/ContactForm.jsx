import style from './contactForm.module.scss';
import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
    handleChange = (evt) => {
        this.setState({[evt.currentTarget.name]: evt.currentTarget.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
          name: '',
          number: ''});
    }

    render() {
        return (
            <form className={style.form} onSubmit={evt => this.onSubmit(evt)}>
                <label className={style.label}> Name
                    <input
                    className={style.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={evt => this.handleChange(evt)}
                    />
                </label>
                
                <label className={style.label}> Number 
                    <input
                    className={style.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={evt => this.handleChange(evt)}
                    />
                </label> 
                <button className={style.submit} type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default ContactForm;