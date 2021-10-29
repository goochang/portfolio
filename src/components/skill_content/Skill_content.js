import React from 'react';
import styles from './Skill_content.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Skill_content = ({title, content, img}) => {

    return (
        <div  className={cx('skill_content')}>
            <h1 className={cx('type-text')}>{Text}</h1>
        </div>
    );

}

export default Skill_content;