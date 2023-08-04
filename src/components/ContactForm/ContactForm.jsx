import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    };
    
    state = {
        name: '',
        number: '',
    };

handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };
    
    