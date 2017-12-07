const secondhand=document.querySelector('.sec-hand');
const minhand=document.querySelector('.min-hand');
const hourhand=document.querySelector('.hour-hand');
function setDate() {
    const now=new Date();
    const seconds =now.getSeconds();
    const seconddegree=((seconds/60)*360)+90;
secondhand.style.transform=`rotate(${seconddegree}deg)`;

const min=now.getMinutes();
const mindeg=((min/60)*360)+90;
minhand.style.transform=`rotate(${mindeg}deg)`;

const hour=now.getHours();
const hourdeg=((hour/12)*360)+90;
hourhand.style.transform=(`rotate(${hourdeg}deg)`);
console.log(seconds);
}

setInterval(setDate,1000);

