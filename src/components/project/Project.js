import React, { Component } from 'react';
import styles from './Project.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Project extends Component {
    render() {
        return (
            <div  className={cx('project')}>
                <div className={cx('project_title')}>
                    <h1>project</h1>
                </div>
                
            </div>
        );

    }
}

export default Project;