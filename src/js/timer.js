window.onload =function(){
document.querySelector(".wrapper").style.backgroundImage="url(images/mainbackground.jpg)";
};


const timerOnPage = function(){
    const timerStartTime = 8;
    const seconds = document.querySelector(".seconds-counter");
    const minutes = document.querySelector(".minutes-counter");
    minutes.innerText="0"+timerStartTime;
    let d = new Date(0);
    d.setMinutes(d.getMinutes() + 8);
    let i = 60 * timerStartTime;
    let min = timerStartTime;
    
    const timeRender = function()  {
    
      if(d.getSeconds()>9){
        seconds.innerText = d.getSeconds();
      } else{
        seconds.innerText = "0" + d.getSeconds();
      }
    
      if (d.getMinutes() != min) {
        min = d.getMinutes();
        minutes.innerText ="0" + d.getMinutes();
      }
      d.setSeconds(d.getSeconds() - 1);
      i = i - 1;
      if (i < 0) {
        clearInterval(timer);
      }
    };
    const timer = setInterval(timeRender, 1000);
  };
  timerOnPage();