import React from 'react';
import styles from './SkillContent.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SkillContent = ({title, img, level}) => {

    return (
        <div className={cx('skill_img')} id={title} style={{backgroundImage: `url(${img})`}}>
            <div className={cx('skill_label')}>{level}</div>
        </div>
        );

}

export default SkillContent;