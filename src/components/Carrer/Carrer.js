import React, { Component } from 'react';
import styles from './Carrer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Carrer extends Component {
    render() {
        return (
            <div  className={cx('carrer')}>
                <div className={cx('carrer_title')}>
                    <h1>carrer</h1>
                </div>
            </div>
        );

    }
}

export default Carrer;