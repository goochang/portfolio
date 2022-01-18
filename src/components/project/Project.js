import React, { Component } from 'react';
import styles from './Project.scss';
import classNames from 'classnames/bind';
import ProjectContent from './projectContent/ProjectContent';

import project_img1 from "../../static/img/project1.PNG"

const cx = classNames.bind(styles);

class Project extends Component {
    render() {
        return (
            <div  className={cx('project')}>
                <div className={cx('project_title')}>
                    <h1>개인 프로젝트</h1>
                </div>
                <div className={cx('project_container')}>
                    <ProjectContent title="트위터 클론코딩" tag={["#트위터", "#클론코딩", "#REACT"]} 
                    when="2021.11~2022.1" img={project_img1}
                    what={["React 개발 능력 향상을 위해 개인적으로 트위터 클론 코딩을, ", <br />, " 진행하였습니다. 기본적인 게시판을 만들어보고 이미지 Crop", <br />, "및 Firebase에서 지원하는 이메일 인증 같은 간단한 기능도 ", <br />, "추가해보았습니다"]}
                    link="https://goochang.github.io/nwitter"/>
                </div>
            </div>
        );

    }
}

export default Project;