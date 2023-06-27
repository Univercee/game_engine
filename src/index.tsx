import ReactDom from 'react-dom'
import { Background } from './components/Background'
import './levels/level_0'
import './index.css';

// import reportWebVitals from './reportWebVitals';

const FPS = 8;
function tick(){
  new Background().tick()
  ReactDom.render(
    new Background().render(),
    document.getElementById('root') 
  );
}
setInterval(tick, 1/FPS * 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
