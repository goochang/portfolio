import React, { Component } from 'react';
import styles from './Carrer.scss';
import classNames from 'classnames/bind';
import CarrerContent from '../carrercontent/CarrerContent';

import sunrin from "../../static/carrer/1.PNG"
import codem from "../../static/carrer/2.PNG"
import acorn from "../../static/carrer/3.JPG"
import spring from "../../static/img/spring.png"


const cx = classNames.bind(styles);

class Carrer extends Component {
    render() {
        return (
            <div  className={cx('carrer')}>
                <div className={cx('carrer_title')}>
                    <h1>Carrer</h1>
                    <p>이미지 링크있습니다</p>
                </div>
                <div>

                <div className={cx('carrer_container')}>
                    <CarrerContent title="선린인고" img={sunrin} tag={["#IT특성화고", "#선린인고", "#개발포트폴리오"]} when="2014~2016" 
                    where="선린인터넷고등학교"
                    what={["IT관련 특성화고 선린인터넷고등학교에서 C, C++, Java, Html, ", <br />, "Css,Php, MySQL, Python 등의 개발언어들의 기초를 배우며", <br />, "수행한 프로젝트 포트폴리오 입니다"]}
                    link="https://drive.google.com/file/d/0B_gNZ96B1Ds1TGVDcUlzSm0tdWc/view?usp=sharing&resourcekey=0-MQpWPJtHBIoiraLXmhk_ug"/>

                    <CarrerContent title="코드엠" img={codem} tag={["#워드프레스", "#쇼핑몰", "#PHP", "#SVN", "#JQuery"]} when="2016.12~2018.01" 
                    where="워드프레스 쇼핑몰 코드엠샵"
                    what={["PHP기반 워드프레스를 활용하여 쇼핑몰을 시작하는 분들이 ", <br />, "간편하게 쇼핑몰 시스템을 이용할 수 있도록 각종 플러그인을 ", <br />, "개발하고 유지보수 및 호스팅해주는 회사에서", <br />, "플러그인 개발 및 유지보수를 담당했습니다"]}
                    link="https://www.codemshop.com/"/>

                    <CarrerContent title="국비지원교육" img={acorn} tag={["#국비지원교육", "#SPRING", "#React", "#HTML", "#CSS", "#JS"]} when="2018.5~2018.11" 
                    where="프론트엔드 개발을 위한 자바 웹개발자 양성과정"
                    what={["spring기반 웹개발과 React 기초를 쌓고 프로젝트 경험을", <br />, "쌓았습니다. 프로젝트를 함에 있어서 비전공자 분들이 많아서", <br />, "팀원 대부분이 저에게 의지하고 핵심 기능은 제가 전담하는", <br />, 
                    "식으로 프로젝트를 진행하여 부담감이 심했습니다.", <br/>, "6개월간 다음 팀 인원들에게도 도움주는 모습을 보고", <br/>, " 수료식날 유일하게 상을 주지 않았나 싶습니다"]}
                    link="https://docs.google.com/presentation/d/1iRDvb34hfHEkQN5W0UUbN9gMqnbwYp5D/edit?usp=sharing&ouid=113029944337796583642&rtpof=true&sd=true"/>

                    <CarrerContent title="바이너리" img={spring} tag={["#Spring", "#JS", "#Jquery"]} when="2018.12~2019.05" 
                    where="Spring기반 외주업체"
                    what={["군복무전 남은 기간에 알바형식으로 6개월가량 다닌 외주업체 ", <br />, "입니다. 간단한 쇼핑몰이나 모바일 청첩장 등의 프로젝트를 ", <br />, "페이지별로 분담하여 개발을 진행하였습니다"]}
                    />
                    </div>
                </div>
            </div>
        );

    }
}

export default Carrer;