import { emailRegex } from './constants';

export default function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (emailRegex.test(values.email)) {
        errors.email = 'Invalid email';
    } 

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 or more characters';
    }

    if (!values.username) {
        errors.username = 'Name or username is required';
    } else if (values.username.length < 2) {
        errors.username = 'Must be 2 or more characters';
    } else if (values.username.length > 30) {
        errors.username = 'Name or username is too long';
    }
    
    return errors;
};