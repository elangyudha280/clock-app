

function getTime() {

    let currentTime = new Date();
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes();
  
    //Time of day
    // let greet = '';
    // if (hour >= 5 && hour <= 11) {
    //   greet = 'morning';
    // } else if (hour >= 12 && hour <= 17) {
    //   greet = 'afternoon';
    // } 
    // else {
    //   greet = 'evening';
    // }
    // //   document.querySelector('.currently__greeting').textContent = `good ${greet}`
    // console.log(greet)
      
      //Bg and icon
    //   if (hour >= 5 && hour <= 17 ) {
    //       background.classList.add('day');
    //       icon.src = './assets/desktop/icon-sun.svg';
    //       icon.setAttribute("alt", "sun icon");
    //   } else {
    //       background.classList.add('night');
    //       icon.src = './assets/desktop/icon-moon.svg';
    //       icon.setAttribute("alt", "moon icon");
    //       details.style.color = '#fff';
    //       details.style.background = 'rgba(0, 0, 0, 0.75)';
    //   }
    
      // Time setup
    // if(minute < 10){
    //   minute = "0" + minute
    //   }
    
    // if (hour === 0) {
    //   hour = 12
    // //   period.textContent = "am";
    // console.log('am')
    // } else if (hour === 12) {
    // //   period.textContent = "pm";
    // console.log('pm')
    // } else if (hour > 12) {
    //   hour -= 12;
    // //   period.textContent = "pm";
    // console.log('pm')
    // } else {
    // //   period.textContent = "am";
    // console.log('pm')
    //   }
    //   document.querySelector(".time-now").textContent = `${hour}:${minute}`;
    // setClockTime({
    //   hour,
    //   minute
    // })
      
    //   //Update time
    //   let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;
    // setTimeout(getTime,interval)

    console.log(hour + ' : ' + minute)
    
    return {
      hour,
      minute
    }
  }



  export {getTime}