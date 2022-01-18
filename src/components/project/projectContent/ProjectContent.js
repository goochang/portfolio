import React from 'react';
import styles from './ProjectContent.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProjectContent = ({title, img, when, what, tag, link}) => {

    return (
        <div className={cx('project_content')} >
            <div className={cx('project_img')}>
                <a href={link} target="_blank_">
                    <img src={img} alt={title} />
                </a>
            </div>
            <div className={cx('project_info')}>
                <p className={cx('project_title')}>{title}</p>
                <p className={cx('project_when')}>기간 : {when}</p>
                <p className={cx('project_what')}>{what}</p>
                <p className={cx('project_tag')}>{tag.join(" ")}</p>
            </div>
        </div>
        );

}

export default ProjectContent;