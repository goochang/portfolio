import React, { Component } from 'react';
import styles from './Skill.scss';
import classNames from 'classnames/bind';
import SkillContent from '../skillcontent/SkillContent';
import SkillContainer from '../skillcontainer/SkillContainer';

import JsImg from "../../static/img/js.png"
import CssImg from "../../static/img/css.png"
import HtmlImg from "../../static/img/html.png"

import reactImg from "../../static/img/react.png"
import jqueryImg from "../../static/img/jquery.png"

import springImg from "../../static/img/spring.png"
import phpImg from "../../static/img/php.png"
import nodeImg from "../../static/img/node.png"

import svnImg from "../../static/img/svn.jpg"
import gitImg from "../../static/img/git.png"

const cx = classNames.bind(styles);

class Skill extends Component {
    render() {
        return (
            <div  className={cx('skill')}>
                <div className={cx('skill_title')}>
                    <h1>Skills</h1>
                </div>   
                <SkillContainer title='Frontend'>
                    <SkillContent title="html" img={HtmlImg} level="famillar" />
                    <SkillContent title="css" img={CssImg} level="famillar"/>
                    <SkillContent title="js" img={JsImg} level="famillar"/>
                    <SkillContent title="react" img={reactImg} level="beginner"/>
                    <SkillContent title="jquery" img={jqueryImg} level="famillar"/>
                </SkillContainer>              
                <SkillContainer title='Backend'>
                    <SkillContent title="spring" img={springImg} level="beginner"/>
                    <SkillContent title="php" img={phpImg} level="middle"/>
                    <SkillContent title="node.js" img={nodeImg} level="beginner"/>
                </SkillContainer>      
                <SkillContainer title='Version Control'>
                    <SkillContent title="svn" img={svnImg} level="middle"/>
                    <SkillContent title="github" img={gitImg} level="middle"/>
                </SkillContainer>              
            </div>
        );

    }
}

export default Skill;