
// var mediaQueryList = window.matchMedia('(max-width: 576px)');
if(window.matchMedia('(max-width: 576px)').matches){
  var x = document.getElementById("myTopnav");
  x.style.display = 'none';
  function NavFunction() {
    
    if (x.className === "navList") {
      x.style.display = 'block';
      x.className += "responsive";
      console.log(x.className + "1 opened")
      x.style.opacity = '1';

      let myNav = document.getElementById("imNav");
      myNav.style.height = "100px"
      console.log(myNav.style.height);
      function fadingheight(){
        var increment = 130 ;
        var newheight = "100px";
        var instance = window.setInterval(function() {
            myNav.style.height = newheight.replace("px", "") + "px";
            console.log(myNav.style.height)
            newheight = +newheight.slice(0,3) + increment;
            newheight = newheight+"px"
            console.log(newheight)
            if(myNav.style.height > 332.8 + "px"){
                window.clearInterval(instance);
            }
        },1)
    }
    fadingheight();
    //   function fading(){
    //     var increment = 0.020;
    //     var opacity = 0;
    //     var instance = window.setInterval(function() {
    //         x.style.opacity = opacity
    //         opacity = opacity + increment;
    //         if(opacity > 1){
    //             window.clearInterval(instance);
    //         }
    //     },100)
    // }
    // fading();
      // for (height = 0; height < 228; height = height + 1) {           
      //   setTimeout(function(){x.style.height = height;},100) 
      // }  


    } else {
      let myNavClose = document.getElementById("imNav");
      console.log()
      console.log(myNavClose.style.height);
      function fadingheightClose(){
        var decrement = 130 ;
        var newheight = "100px";
        console.log(newheight.length)
        var instance = window.setInterval(function() {
            myNavClose.style.height = newheight.replace("px", "") + "px";
            console.log(myNavClose.style.height)
            if(newheight.length === 5){
              newheight = +newheight.slice(0,3) - decrement;
            }else if(newheight.length === 4){
              newheight = +newheight.slice(0,2) - decrement;
            }
            newheight = newheight+"px"
            console.log(newheight)
            if(myNavClose.style.height < 90 + "px"){
              // console.log(myNavClose.style.height)
              window.clearInterval(instance);
            }
        },1)
    }
    fadingheightClose();
  // function fading(){
  //       var increment = 0.020;
  //       var opacity = 1;
  //       var instance = window.setInterval(function() {
  //           x.style.opacity = opacity
  //           opacity = opacity - increment;
  //           if(opacity =0){
  //               window.clearInterval(instance);
  //           }
  //       },100)
  //   }
  //   fading();
      x.style.display = "none";
      x.className = "navList";
      // console.log(x.className)
    }
  } 

}



window.onscroll = function() {scrollFunction()};
 

function scrollFunction() {
  if(window.matchMedia("(min-width: 576px)").matches){
    console.log("min-width 576")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").style.transition = 'all 2';
      document.querySelector("nav").style.backgroundColor = '#111319';
      document.querySelector("nav").style.padding = '.7rem 1.2rem';
      document.querySelector("nav").style.boxShadow = '0px 0px 10px rgba(255,255,255,.08)';
  } else {
      document.querySelector("nav").style.transition = 'all 2';
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.padding = '2rem 1.2rem';
      document.querySelector("nav").style.boxShadow = 'none';
  }
}else{
  console.log("max-width 576")
}
}
// var x = window.matchMedia("(min-width: 576px)")
// myFunction(x) // Call li  stener function at run time
// x.addListener(window.onscroll) // Attach listener function on state changes


// ------------------------------------------------------------------------------------------

// var mediaQueryList = window.matchMedia('(max-width: 600px)');

// function screenTest(e) {
//   if (e.matches) {
//     /* the viewport is 600 pixels wide or less */
//     paragraph.textContent = 'This is a narrow screen — 600px wide or less.';
//     document.body.style.backgroundColor = 'pink';
//   } else {
//     /* the viewport is more than than 600 pixels wide */
//     paragraph.textContent = 'This is a wide screen — more than 600px wide.';
//     document.body.style.backgroundColor = 'aquamarine';
//   }
// }

// mediaQueryList.addListener(screenTest);




// ---------------------------------------------------------------------------------------