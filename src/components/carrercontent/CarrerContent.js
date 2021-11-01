import React from 'react';
import styles from './CarrerContent.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CarrerContent = ({title, img, where, when, what, tag, link}) => {

    return (
        <div className={cx('carrer_content')} >
            <div className={cx('carrer_img')}>
                <a href={link} target="_blank_">
                    <img src={img} alt={title} />
                </a>
            </div>
            <div className={cx('carrer_info')}>
                <p className={cx('carrer_title')}>{title}</p>
                <p className={cx('carrer_where')}>{where}</p>
                <p className={cx('carrer_when')}>기간 : {when}</p>
                <p className={cx('carrer_what')}>{what}</p>
                <p className={cx('carrer_tag')}>{tag.join(" ")}</p>
            </div>
        </div>
        );

}

export default CarrerContent;