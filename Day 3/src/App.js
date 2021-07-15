import React, {useState} from 'react';
import Icon from './Component/Icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

let [isCross, setIsCross] = useState(true)
let [winMessage, setWinMessage] = useState("")

const playAgain=()=>{
    setIsCross(true)
    setWinMessage("")
    tiktacArray.fill("")
}

function findWinner(tiktacArray){
   const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
for (let i = 0; i < 8; i++) {
  const [a, b, c] = lines[i];
  if (tiktacArray[a] === tiktacArray[b]) && (tiktacArray[a] === tiktacArray[c]) {
return {
  <div>
   <Icon choice="sdvkbhf"/>
    </div>
}
}
export default App;
