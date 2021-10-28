import React, { useEffect, useState } from 'react';
import styles from './Main.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Main = () => {
    const txt = "Developer 최창규의 포트폴리오 입니다";
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);

    useEffect( ()=> {
        const interval = setInterval(() => {
            setText(Text + txt[Count]);
            setCount(Count + 1);
        }, 100);

        if(txt.length === Text.length){
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    });
    return (
        <div  className={cx('main')}>
            <h1 className={cx('type-text')}>{Text}</h1>
        </div>
    );

}

export default Main;