import React, { Component } from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';

import github from "../../static/img/github-logo.svg"
import rocketpunch from "../../static/img/rocket.png"

const cx = classNames.bind(styles);

class Contact extends Component {
    render() {
        return (
            <div  className={cx('contact')}>
                <div className={cx('contact_title')}>
                    <h1>CONTACT</h1>
                </div>

                <div className={cx('contact_content')}>
                    <p>cck742@naver.com</p>
                    <a href='https://github.com/goochang'>
                        <img src={github} alt="github" />
                    </a>
                    <a href='https://www.rocketpunch.com/@09fbfc523ef44e4b'>
                        <img src={rocketpunch} alt='rocketpunch'></img>
                    </a>
                </div>
                
            </div>
        );

    }
}

export default Contact;