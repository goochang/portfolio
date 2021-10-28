import React, { Component } from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class About extends Component {
    render() {
        return (
            <div  className={cx('about')}>
                <div className={cx('about_title')}>
                    <h1>About Me</h1>
                </div>
                <div className={cx('about_content')}>
                    <h1>포기하지 않고 노력하는 사람</h1>
                    <p>우연한 기회로 선린인터넷고등학교에 입학한 뒤로 꾸준히 개발 경험을 쌓고있습니다</p>
                    <p>더욱 더 성숙한 개발자가 되도록 계속해서 노력하고 있습니다</p>
                    <p>잘 부탁드립니다</p>
                </div>
                
            </div>
        );

    }
}

export default About;