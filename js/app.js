'use strict'
let imgArr = ['basket.png','bessball.jpg','football.jpg','golf.jpg','regpy.jpg','tenes.jpg','volipall.jpg']
let Ball = function(source,game,quntity,name,random)
{
    this.source=source;
    this.game=game
    this.quntity=quntity
    this.name=name
    this.random =random;
    Ball.Balls.push(this)
    
}
Ball.Balls=[];
 
let orForm = document.getElementById('form1')
orForm.addEventListener('submit',addball)
function addball(event)
{
    // event.preventDefault();
  let game= event.target.game.value 
  let quntity = event.target.qun.value
  let name =event.target.name.value
  let random = Math.ceil(Math.random() * 10)
  let source;
  for (let i=0;i<imgArr.length;i++)
  {
      if (game == imgArr[i].split('.')[0])
      {source='img/'+imgArr[i];}
  }
  new Ball (source,game,quntity,name,random)
  render()
  savetoLocalstorge();

}

function savetoLocalstorge()
{
    let info = JSON.stringify(Ball.Balls)
    localStorage.setItem('order',info)
}
function getFromLocal()
{
    let orinfo = JSON.parse(localStorage.getItem('order'))
    if(orinfo !=null)
    {Ball.Balls=orinfo;}

}
getFromLocal()
let tableEl = document.getElementById('ta')
function render()
{
   for(let i=0;i<Ball.Balls.length;i++) 
   {
       let trEl = document.createElement('tr')
       let td0El = document.createElement('td')
       let imgEl = document.createElement('img')
       imgEl.setAttribute('src',Ball.Balls[i].source)
       td0El.appendChild(imgEl)
       trEl.appendChild(td0El)
       let td1El = document.createElement('td')
       td1El.textContent = Ball.Balls[i].name;
       trEl.appendChild(td1El);
       let td2El = document.createElement('td')
       td2El.textContent = Ball.Balls[i].game;
       trEl.appendChild(td2El);
       let td3El = document.createElement('td')
       td3El.textContent = Ball.Balls[i].quntity;
       trEl.appendChild(td3El);
       let td4El = document.createElement('td')
       td4El.textContent = Ball.Balls[i].quntity;
       trEl.appendChild(td4El);
       tableEl.appendChild(trEl)
       
   }
}
render()