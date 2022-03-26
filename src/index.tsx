import ReactDOM from 'react-dom';
import './index.css';
import './keyListener'
import GameObjects, { addObject } from './GameObjects';
import { Dino } from './components/Dino'
import { Cristall } from './components/Cristall';
import Colors from './types/Colors';
import { Hud } from './components/HUD';
import Keys from './types/Keys';
import { Background } from './components/Background';

// import reportWebVitals from './reportWebVitals';

const FPS = 8;
new Background()

let hud_a = new Hud(Keys.A)
let hud_d = new Hud(Keys.D)
let hud_shift = new Hud(Keys.Shift)
let hud_space = new Hud(Keys.Space)
hud_a.setPosition(20,40)
hud_a.setFrameWidth(5)
hud_d.setPosition(25,40)
hud_d.setFrameWidth(5)
hud_shift.setPosition(5,40)
hud_shift.setFrameWidth(12.5)
hud_space.setPosition(1.5,30)
hud_space.setFrameWidth(35)

let green_cristall = new Cristall(Colors.Green)
let red_cristall = new Cristall(Colors.Red)
let yellow_cristall = new Cristall(Colors.Yellow)
let blue_cristall = new Cristall(Colors.Blue)
green_cristall.setPosition(15, 7)
red_cristall.setPosition(35, 7)
yellow_cristall.setPosition(55, 7)
blue_cristall.setPosition(75, 7)

let dino = new Dino(Colors.Blue)
dino.setPosition(4, 5.5)

dino.addOverlapListener(green_cristall)
dino.addOverlapListener(red_cristall)
dino.addOverlapListener(yellow_cristall)
dino.addOverlapListener(blue_cristall)
green_cristall.addOverlapListener(dino)
red_cristall.addOverlapListener(dino)
yellow_cristall.addOverlapListener(dino)
blue_cristall.addOverlapListener(dino)

new Background().addChild(blue_cristall)
new Background().addChild(green_cristall)
new Background().addChild(red_cristall)
new Background().addChild(yellow_cristall)
new Background().addChild(hud_a)
new Background().addChild(hud_d)
new Background().addChild(hud_shift)
new Background().addChild(hud_space)
new Background().addChild(dino)

addObject(new Background())
function tick(){
  GameObjects.forEach((value, key)=>{
    value.tick()
  })
  ReactDOM.render(
    Array.from(GameObjects).map(([key, value]) => value.render()),
    document.getElementById('root') 
  );
}
setInterval(tick, 1/FPS * 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();