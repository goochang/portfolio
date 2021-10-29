import About from './components/about/About';
import Main from './components/main/Main';

import styles from './App.scss';
import classNames from 'classnames/bind';
import Skill from './components/skill/Skill';
import Carrer from './components/Carrer/Carrer';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
const cx = classNames.bind(styles);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <div className={cx('bg')}></div>
      <Main />
      <About />
      <Skill />
      <Carrer />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
