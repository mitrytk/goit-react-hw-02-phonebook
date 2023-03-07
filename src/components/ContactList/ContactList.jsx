import style from './contactList.module.scss';
import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContactList extends Component {
 render () {
    const contacts = this.props.contacts;
    return (
        <ul className={style.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={style.item}>
                        <p className={style.contactName}>{contact.name}: </p>
                        <p className={style.contactNumber}>{contact.number}</p>
                        <button className={style.button} id={contact.id} type='button' onClick={evt => this.props.onDelete(evt)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
 }
}

ContactList.propTypes = {
    onDelete: PropTypes.func,
    contacts: PropTypes.array,
}

export default ContactList;