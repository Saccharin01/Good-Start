import { item } from "./data.js"
import { styles } from "./style.js"
import { evnet } from "./Event.js"

evnet()


let itemEle = Object.entries(item)
let rootStyle = Object.entries(styles.root)
let root = document.querySelector('#root');
let childrenStyle = Object.entries(styles.root.children);
let body = document.querySelector(`body`)
let bodyST = Object.entries(styles["*"])


// * body style==============================
for(let i = 0; i<bodyST.length; i++){
  body.style[bodyST[i][0]] = bodyST[i][1]
};

// * ==============================

// * root ==============================
for(let i = 0; i < rootStyle.length; i++){  
  root.style[rootStyle[i][0]] = rootStyle[i][1]
};

// * ==============================


// * root.child==============================
for(let i = 0; i < itemEle.length; i++){
  let makeDiv = document.createElement('div');
  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${itemEle[i][0]}\n${itemEle[i][1]}`;
  
  for(let j = 0; j < childrenStyle.length; j++){
    root.children[i].style[childrenStyle[j][0]] = childrenStyle[j][1];
  };
};

// * ==============================