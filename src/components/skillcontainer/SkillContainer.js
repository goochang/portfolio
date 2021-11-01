import React from 'react';
import styles from './SkillContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SkillContainer = ({title, children}) => {

    return (
        <div  className={cx('skill_container')}>
            <h1>{title}</h1>
            {children}
        </div>
    );

}

export default SkillContainer;