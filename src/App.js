import About from './components/about/About';
import Main from './components/main/Main';

import styles from './App.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <div className={cx('bg')}></div>
      <Main />
      <About />
    </div>
  );
}

export default App;
