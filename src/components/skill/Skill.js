import React, { Component } from 'react';
import styles from './Skill.scss';
import classNames from 'classnames/bind';
import Skill_content from '../skill_content/Skill_content';
import Skill_container from '../skill_container/Skill_container';

const cx = classNames.bind(styles);

class Skill extends Component {
    render() {
        return (
            <div  className={cx('skill')}>
                <div className={cx('skill_title')}>
                    <h1>skill</h1>
                </div>   
                <Skill_container title={'frontend'}>
                    <div><h1>wqeqwe</h1></div>
                </Skill_container>              
            </div>
        );

    }
}

export default Skill;