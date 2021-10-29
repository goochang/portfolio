import React, { Component } from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Contact extends Component {
    render() {
        return (
            <div  className={cx('contact')}>
                <div className={cx('contact_title')}>
                    <h1>contact</h1>
                </div>
                
            </div>
        );

    }
}

export default Contact;