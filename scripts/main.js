const myHeading = document.querySelector('h1');
myHeading.textContent = '19春之日本行记!';
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fuji-1.jpg') {
      myImage.setAttribute ('src','images/fuji-2.jpg');
    } else {
      myImage.setAttribute ('src','images/swan.jpg');
    }
}

var video = document.getElementById("video-1");
video.addEventListener("click", function(event) { 
      if (video.paused == true) {
           video.play();
      }
      else{
           video.pause();
      }
});