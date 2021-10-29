import React from 'react';
import styles from './Skill_container.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Skill_container = ({title, children}) => {

    return (
        <div  className={cx('skill_container')}>
            <h1>{title}</h1>
            {children}
        </div>
    );

}

export default Skill_container;